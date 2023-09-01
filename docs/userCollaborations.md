# UserCollaborationsManager

- [Get collaboration](#get-collaboration)
- [Update collaboration](#update-collaboration)
- [Remove collaboration](#remove-collaboration)
- [Create collaboration](#create-collaboration)

## Get collaboration

Retrieves a single collaboration.

This operation is performed by calling function `getCollaborationById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collaborations-id/).

_Currently we don't have an example for calling `getCollaborationById` in integration tests_

### Arguments

- collaborationId `string`
  - The ID of the collaboration Example: "1234"
- queryParams `GetCollaborationByIdQueryParamsArg`
  - Query parameters of getCollaborationById method
- headers `GetCollaborationByIdHeadersArg`
  - Headers of getCollaborationById method

### Returns

This function returns a value of type `Collaboration`.

Returns a collaboration object.

## Update collaboration

Updates a collaboration.
Can be used to change the owner of an item, or to
accept collaboration invites.

This operation is performed by calling function `updateCollaborationById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-collaborations-id/).

_Currently we don't have an example for calling `updateCollaborationById` in integration tests_

### Arguments

- collaborationId `string`
  - The ID of the collaboration Example: "1234"
- requestBody `UpdateCollaborationByIdRequestBodyArg`
  - Request body of updateCollaborationById method
- headers `UpdateCollaborationByIdHeadersArg`
  - Headers of updateCollaborationById method

### Returns

This function returns a value of type `Collaboration`.

Returns an updated collaboration object unless the owner has changed.If the role is changed to `owner`, the collaboration is deleted
and a new collaboration is created. The previous `owner` of
the old collaboration will be a `co-owner` on the new collaboration.

## Remove collaboration

Deletes a single collaboration.

This operation is performed by calling function `deleteCollaborationById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-collaborations-id/).

_Currently we don't have an example for calling `deleteCollaborationById` in integration tests_

### Arguments

- collaborationId `string`
  - The ID of the collaboration Example: "1234"
- headers `DeleteCollaborationByIdHeadersArg`
  - Headers of deleteCollaborationById method

### Returns

This function returns a value of type `undefined`.

A blank response is returned if the collaboration was
successfully deleted.

## Create collaboration

Adds a collaboration for a single user or a single group to a file
or folder.

Collaborations can be created using email address, user IDs, or a
group IDs.

If a collaboration is being created with a group, access to
this endpoint is dependent on the group's ability to be invited.

If collaboration is in `pending` status, the following fields
are redacted:

- `login` and `name` are hidden if a collaboration was created
  using `user_id`,
- `name` is hidden if a collaboration was created using `login`.

This operation is performed by calling function `createCollaboration`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-collaborations/).

_Currently we don't have an example for calling `createCollaboration` in integration tests_

### Arguments

- requestBody `CreateCollaborationRequestBodyArg`
  - Request body of createCollaboration method
- queryParams `CreateCollaborationQueryParamsArg`
  - Query parameters of createCollaboration method
- headers `CreateCollaborationHeadersArg`
  - Headers of createCollaboration method

### Returns

This function returns a value of type `Collaboration`.

Returns a new collaboration object.