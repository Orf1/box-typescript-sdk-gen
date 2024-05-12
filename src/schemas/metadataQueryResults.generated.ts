import { serializeFileOrFolder } from './fileOrFolder.generated.js';
import { deserializeFileOrFolder } from './fileOrFolder.generated.js';
import { FileOrFolder } from './fileOrFolder.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface MetadataQueryResults {
  readonly entries?: readonly FileOrFolder[];
  readonly limit?: number;
  readonly nextMarker?: string;
}
export function serializeMetadataQueryResults(
  val: MetadataQueryResults
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileOrFolder): SerializedData {
            return serializeFileOrFolder(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeMetadataQueryResults(
  val: SerializedData
): MetadataQueryResults {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "MetadataQueryResults"',
    });
  }
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "MetadataQueryResults"',
    });
  }
  const entries: undefined | readonly FileOrFolder[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): FileOrFolder {
          return deserializeFileOrFolder(itm);
        }) as readonly any[])
      : [];
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "MetadataQueryResults"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "next_marker" of type "MetadataQueryResults"',
    });
  }
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies MetadataQueryResults;
}
