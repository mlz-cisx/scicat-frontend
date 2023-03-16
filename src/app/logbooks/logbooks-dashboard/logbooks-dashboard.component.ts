import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ChangeDetectorRef,
  AfterViewChecked,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Dataset, Logbook } from "shared/sdk";
import { combineLatest, Observable, Subscription } from "rxjs";
import { selectLogbooksDashboardPageViewModel } from "state-management/selectors/logbooks.selectors";
import {
  fetchDatasetLogbookAction,
  prefillFiltersAction,
  setTextFilterAction,
  setDisplayFiltersAction,
  changePageAction,
  sortByColumnAction,
  clearLogbookAction,
} from "state-management/actions/logbooks.actions";
import { ActivatedRoute, Router } from "@angular/router";
import { LogbookFilters } from "state-management/models";

import { map, take, distinctUntilChanged } from "rxjs/operators";
import deepEqual from "deep-equal";
import {
  PageChangeEvent,
  SortChangeEvent,
} from "shared/modules/table/table.component";
import { AppConfigService } from "app-config.service";
import { selectCurrentDataset } from "state-management/selectors/datasets.selectors";
import { OwnershipService } from "shared/services/ownership.service";
import { TableData } from "proposals/view-proposal-page/view-proposal-page.component";

export interface LogbookData {
  logbook: Logbook;
  entriesCount: number;
  entriesPerPage: number;
  currentPage: number;
  filters: LogbookFilters;
}
@Component({
  selector: "app-logbooks-dashboard",
  templateUrl: "./logbooks-dashboard.component.html",
  styleUrls: ["./logbooks-dashboard.component.scss"],
})
export class LogbooksDashboardComponent
  implements OnInit, OnDestroy, AfterViewChecked {
  vm$ = this.store.select(selectLogbooksDashboardPageViewModel);

  @Input() proposal_logbook: LogbookData;
  @Input() proposal_dataset: TableData;

  dataset: Dataset | undefined = undefined;
  appConfig = this.appConfigService.getConfig();

  subscriptions: Subscription[] = [];

  constructor(
    public appConfigService: AppConfigService,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private ownershipService: OwnershipService
  ) {}

  applyRouterState(pid: string, filters: LogbookFilters) {
    console.log("Rerouting to Dataset Logbook");
    if (this.proposal_logbook) return;

    this.router.navigate(["/datasets", pid, "logbook"], {
      queryParams: { args: JSON.stringify(filters) },
    });
  }

  onTextSearchChange(pid: string, query: string) {
    const queryTxt = query.trim();
    
    if(queryTxt.length > 0){
      this.store.dispatch(setTextFilterAction({ textSearch: queryTxt }));
      this.store.dispatch(fetchDatasetLogbookAction({ pid }));
    }
  }

  onFilterSelect(pid: string, filters: LogbookFilters) {
    const { showBotMessages, showImages, showUserMessages } = filters;

    this.store.dispatch(
      setDisplayFiltersAction({ showBotMessages, showImages, showUserMessages })
    );
    this.store.dispatch(fetchDatasetLogbookAction({ pid }));
    this.applyRouterState(pid, filters);
  }

  onPageChange(pid: string, event: PageChangeEvent) {
    this.store.dispatch(
      changePageAction({ page: event.pageIndex, limit: event.pageSize })
    );
    this.store.dispatch(fetchDatasetLogbookAction({ pid }));
  }

  onSortChange(pid: string, event: SortChangeEvent) {
    const { active: column, direction } = event;
    this.store.dispatch(sortByColumnAction({ column, direction }));
    this.store.dispatch(fetchDatasetLogbookAction({ pid }));
  }

  ngOnInit() {

    this.subscriptions.push(
      combineLatest([this.route.params, this.vm$])
        .pipe(
          map(([params, vm]) => [params, vm.filters]),
          distinctUntilChanged(deepEqual)
        )
        .subscribe(([{ pid }, filters]) => {
          if (pid) {
            this.applyRouterState(pid, filters as LogbookFilters);
          }
        })
    );
    this.subscriptions.push(
      this.store.select(selectCurrentDataset).subscribe((dataset) => {
        if (dataset) {
          this.dataset = dataset;
          this.store.dispatch(fetchDatasetLogbookAction({ pid: dataset.pid }));
          this.ownershipService.checkDatasetAccess(
            dataset,
            this.store,
            this.router
          );
        }
      })
    );
    this.subscriptions.push(
      this.route.queryParams
        .pipe(
          map((params) => params.args as string),
          take(1),
          map((args) => (args ? (JSON.parse(args) as LogbookFilters) : {}))
        )
        .subscribe((filters) =>
          this.store.dispatch(prefillFiltersAction({ values: filters }))
        )
    );
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.store.dispatch(clearLogbookAction());
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
