/* eslint-disable */
import {
  PublishedData,
  Sample,
  Datablock,
  OrigDatablock,
  Attachment,
  Instrument
} from '../index';

declare var Object: any;
export interface DerivedDatasetInterface {
  "investigator": string;
  "inputDatasets": Array<any>;
  "usedSoftware": Array<any>;
  "jobParameters"?: any;
  "jobLogData"?: string;
  "scientificMetadata"?: any;
  "pid"?: string;
  "owner": string;
  "ownerEmail"?: string;
  "orcidOfOwner"?: string;
  "contactEmail": string;
  "sourceFolder": string;
  "sourceFolderHost"?: string;
  "size"?: number;
  "packedSize"?: number;
  "numberOfFiles"?: number;
  "numberOfFilesArchived"?: number;
  "creationTime": Date;
  "type": string;
  "validationStatus"?: string;
  "keywords"?: Array<any>;
  "description"?: string;
  "datasetName"?: string;
  "classification"?: string;
  "license"?: string;
  "version"?: string;
  "isPublished"?: boolean;
  "sharedWith"?: Array<any>;
  "ownerGroup": string;
  "accessGroups"?: Array<any>;
  "createdBy"?: string;
  "updatedBy"?: string;
  "history"?: Array<any>;
  "datasetlifecycle"?: any;
  "publisheddataId"?: string;
  "techniques"?: Array<any>;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "instrumentId"?: string;
  historyList?: any[];
  datasetLifecycle?: any[];
  publisheddata?: PublishedData;
  techniquesList?: any[];
  samples?: Sample[];
  datablocks?: Datablock[];
  origdatablocks?: OrigDatablock[];
  attachments?: Attachment[];
  instrument?: Instrument;
}

export class DerivedDataset implements DerivedDatasetInterface {
  "investigator": string;
  "inputDatasets": Array<any>;
  "usedSoftware": Array<any>;
  "jobParameters": any;
  "jobLogData": string;
  "scientificMetadata": any;
  "pid": string;
  "owner": string;
  "ownerEmail": string;
  "orcidOfOwner": string;
  "contactEmail": string;
  "sourceFolder": string;
  "sourceFolderHost": string;
  "size": number;
  "packedSize": number;
  "numberOfFiles": number;
  "numberOfFilesArchived": number;
  "creationTime": Date;
  "type": string;
  "validationStatus": string;
  "keywords": Array<any>;
  "description": string;
  "datasetName": string;
  "classification": string;
  "license": string;
  "version": string;
  "isPublished": boolean;
  "sharedWith": Array<any>;
  "ownerGroup": string;
  "accessGroups": Array<any>;
  "createdBy": string;
  "updatedBy": string;
  "history": Array<any>;
  "datasetlifecycle": any;
  "publisheddataId": string;
  "techniques": Array<any>;
  "createdAt": Date;
  "updatedAt": Date;
  "instrumentId": string;
  historyList: any[];
  datasetLifecycle: any[];
  publisheddata: PublishedData;
  techniquesList: any[];
  samples: Sample[];
  datablocks: Datablock[];
  origdatablocks: OrigDatablock[];
  attachments: Attachment[];
  instrument: Instrument;
  constructor(data?: DerivedDatasetInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DerivedDataset`.
   */
  public static getModelName() {
    return "DerivedDataset";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DerivedDataset for dynamic purposes.
  **/
  public static factory(data: DerivedDatasetInterface): DerivedDataset{
    return new DerivedDataset(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'DerivedDataset',
      plural: 'DerivedDatasets',
      path: 'DerivedDatasets',
      idName: 'pid',
      properties: {
        "investigator": {
          name: 'investigator',
          type: 'string'
        },
        "inputDatasets": {
          name: 'inputDatasets',
          type: 'Array&lt;any&gt;'
        },
        "usedSoftware": {
          name: 'usedSoftware',
          type: 'Array&lt;any&gt;'
        },
        "jobParameters": {
          name: 'jobParameters',
          type: 'any'
        },
        "jobLogData": {
          name: 'jobLogData',
          type: 'string'
        },
        "scientificMetadata": {
          name: 'scientificMetadata',
          type: 'any'
        },
        "pid": {
          name: 'pid',
          type: 'string'
        },
        "owner": {
          name: 'owner',
          type: 'string'
        },
        "ownerEmail": {
          name: 'ownerEmail',
          type: 'string'
        },
        "orcidOfOwner": {
          name: 'orcidOfOwner',
          type: 'string'
        },
        "contactEmail": {
          name: 'contactEmail',
          type: 'string'
        },
        "sourceFolder": {
          name: 'sourceFolder',
          type: 'string'
        },
        "sourceFolderHost": {
          name: 'sourceFolderHost',
          type: 'string'
        },
        "size": {
          name: 'size',
          type: 'number'
        },
        "packedSize": {
          name: 'packedSize',
          type: 'number'
        },
        "numberOfFiles": {
          name: 'numberOfFiles',
          type: 'number'
        },
        "numberOfFilesArchived": {
          name: 'numberOfFilesArchived',
          type: 'number'
        },
        "creationTime": {
          name: 'creationTime',
          type: 'Date'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "validationStatus": {
          name: 'validationStatus',
          type: 'string'
        },
        "keywords": {
          name: 'keywords',
          type: 'Array&lt;any&gt;'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "datasetName": {
          name: 'datasetName',
          type: 'string'
        },
        "classification": {
          name: 'classification',
          type: 'string'
        },
        "license": {
          name: 'license',
          type: 'string'
        },
        "version": {
          name: 'version',
          type: 'string'
        },
        "isPublished": {
          name: 'isPublished',
          type: 'boolean'
        },
        "sharedWith": {
          name: 'sharedWith',
          type: 'Array&lt;any&gt;'
        },
        "ownerGroup": {
          name: 'ownerGroup',
          type: 'string'
        },
        "accessGroups": {
          name: 'accessGroups',
          type: 'Array&lt;any&gt;'
        },
        "createdBy": {
          name: 'createdBy',
          type: 'string'
        },
        "updatedBy": {
          name: 'updatedBy',
          type: 'string'
        },
        "history": {
          name: 'history',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "datasetlifecycle": {
          name: 'datasetlifecycle',
          type: 'any'
        },
        "publisheddataId": {
          name: 'publisheddataId',
          type: 'string'
        },
        "techniques": {
          name: 'techniques',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "instrumentId": {
          name: 'instrumentId',
          type: 'string'
        },
      },
      relations: {
        historyList: {
          name: 'historyList',
          type: 'any[]',
          model: '',
          relationType: 'embedsMany',
                  keyFrom: 'history',
          keyTo: 'id'
        },
        datasetLifecycle: {
          name: 'datasetLifecycle',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
                  keyFrom: 'datasetlifecycle',
          keyTo: 'id'
        },
        publisheddata: {
          name: 'publisheddata',
          type: 'PublishedData',
          model: 'PublishedData',
          relationType: 'belongsTo',
                  keyFrom: 'publisheddataId',
          keyTo: 'doi'
        },
        techniquesList: {
          name: 'techniquesList',
          type: 'any[]',
          model: '',
          relationType: 'embedsMany',
                  keyFrom: 'techniques',
          keyTo: 'pid'
        },
        samples: {
          name: 'samples',
          type: 'Sample[]',
          model: 'Sample',
          relationType: 'hasMany',
                  keyFrom: 'pid',
          keyTo: 'derivedDatasetId'
        },
        datablocks: {
          name: 'datablocks',
          type: 'Datablock[]',
          model: 'Datablock',
          relationType: 'hasMany',
                  keyFrom: 'pid',
          keyTo: 'derivedDatasetId'
        },
        origdatablocks: {
          name: 'origdatablocks',
          type: 'OrigDatablock[]',
          model: 'OrigDatablock',
          relationType: 'hasMany',
                  keyFrom: 'pid',
          keyTo: 'derivedDatasetId'
        },
        attachments: {
          name: 'attachments',
          type: 'Attachment[]',
          model: 'Attachment',
          relationType: 'hasMany',
                  keyFrom: 'pid',
          keyTo: 'derivedDatasetId'
        },
        instrument: {
          name: 'instrument',
          type: 'Instrument',
          model: 'Instrument',
          relationType: 'belongsTo',
                  keyFrom: 'instrumentId',
          keyTo: 'pid'
        },
      }
    }
  }
}
