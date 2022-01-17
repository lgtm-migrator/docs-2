---
sidebar_position: 11
---

# Webhooks

The epilot [Webhooks API](/api/webhooks) provides the possibility to subscribe to epilot public events. This will allow you to receive notifications with payload to your configured webhook URL every time events happen in your account.

This document describes the steps how to configure hooks, subscribe to events and how to manage those configurations. Service is reachable using https connection to ensure encryption between client and service.

Webhooks can be comfortably configured and managed by admin users in epilot portal.

[Webhooks API Documentation](/api/webhooks)

## Available events
For an overview about all events you can subscribe to with Webhooks you can call following endpoint `/webhooks/configured-events`. The response will contain a list of event names and their labels in form:
* **eventName**: Name for identifying the event.
* **eventLabel**: Either a user friendly label, or the eventName itself.
When using the UI, you have the list of the available events in the drop down menu in webhook management form.
Following Events are available for subscription:
* [**customer request**](#tag/events_schema): generated on incoming requests from JB Journeys

In [Events Schemas](#tag/events_schema) section you find the schemas of available events ready to register.


## Create Webhook
To secure your client server connection, please setup your webhook using endpoints supporting encryption, preferably [TLS](https://en.wikipedia.org/wiki/HTTPS). So we ensure encrypted data transfer to your server.
An easy way to create webhook is to use the webhook ui in the epilot portal. You can set up your webhook configuration using the management form, and fill in there details about the webhook endpoint, event types and [authorization information](#section/Create-webhook/Authentication). However you still can use our API in the same way.
To subscribe to an event using the API please use the `/webhooks/{yourOrganizationId}/configs` endpoint and post your receiver endpoint settings:

| field | Required | Description |
| ------- | --------| --------|
| eventName  | required | epilot event you want to subscribe. see [Which events are available](#section/Create-Webhook/Which-events-are-available)|
| url  | required | your endpoint where you want to receive the payload |
| httpMethod | required | http method |
| enabled | optional  |boolean whether the webhook is active or not |
| auth | required |your endpoint authentication information. See [Authentication](#section/Create-Webhook/Authentication)|
| filter  | optional |filter options, here you have the possibility to filter events, by product categories for example |

## Authentication
We assume that your event handler endpoint is secured, we support currently following authentication types:
* [Basic authentication](#section/Create-Webhook/Authentication/Basic-Authentication)
* [Oauth](#section/Create-Webhook/Authentication/Oauth)
* [API key](#section/Create-Webhook/Authentication/API-key)

Further details on how to set up your authentication information using the API:
### Basic Authentication

If you are using basic authentication you can set up the `auth` field

| field | Required | Description |
| ------- | --------| --------|
| authType | required | "BASIC" |
| basicAuthConfig | required | object only if authType is BASIC |

**basicAuthConfig**:

| field | Required | Description |
| ------- | --------| --------|
| username | required | valid username for your endpoint |
| password | required | password |

### OAuth

In case your endpoint is secured using Oauth your `Auth` should have following structure:

| field | Required | Description |
| ------- | --------| --------|
| authType | required | "OAUTH_CLIENT_CREDENTIALS" |
| oauthConfig | required | object only if authType is OAUTH_CLIENT_CREDENTIALS |

**oauthConfig**:

| field | Required | Description |
| ------- | --------| --------|
| clientId | required | your app Oauth client Id |
| clientSecret | required | Oauth client secret |
| endpoint | required | HTTPS endpoint for authentication |
| httpMethod | required | HTTP methods like GET, POST... |

### API key

We support also endpoints secured using API keys. In this case your webhook set up could be configured this way:

| field | Required | Description |
| ------- | --------| --------|
| authType * | "API_KEY" |
| apiKeyConfig * | object only if authType is API_KEY |

**apiKeyConfig**:

| field | Required | Description |
| ------- | --------| --------|
| keyName | required | used key name |
| keyValue | required | value of the used key |

## Enable Filtering

For better software integration you have the possibility to set up more granular filter for your subscribed events. For this please make use of the filter option when you create a webhook.
Please note that the entire event will be sent when the filter matches.

Using our ui in epilot portal, you can enable the filter option, and select items to be filtered.

Using the webhook API, here more details about the possible and required fields.

| field | Required | Description |
| ------- | --------| --------|
| keyToFilter | required | field of payload you want to filter |
| supportedValues | required | list of values you want to receive |

The subscribed events are simply a json structure, to have a filter in place for specific field in the event, you just set the `keyToFilter` value to be the field attribute structure of the json.

For example you have the following event structure and you want your filter to apply only auth type :

```
keyToFilter: {
  id,
  name,
  security {
    auth {
      type // basic|apikey|oauth|none
    }
  }
}
```

the `keyToFilter` should be `keyToFilter.security.auth`. And possible values should be set in `supportedValues` field.

Please note that the `supportedValues` are **case sensitive**.

Following example will filter this sample event to send only events having auth types basic and oauth.

```
filter: {
  keyToFilter: 'keyToFilter.security.auth',
  supportedValues: ['basic', 'oauth']
}
```

**Sample filter:**

For `Customer request` event you can filter events and receive only events related to specific product category:
```
filter: {
  keyToFilter: 'customer_request.request_items.product_category',
  supportedValues: ['solar', 'electricity']
}
```

## List configured webhooks

The `/webhooks/{yourOrganizationId}/configs` endpoint provides the list of the configured webhooks by your organization in following structure:

| field | Description |
| ------- | --------|
|id	| webhook id |
|eventName	|subscribed event name|
|url |	configured client endpoint Url|
|creationTime| webhook creation time|
|httpMethod	| configured http method|
|enabled	| boolean whether the webhook is enabled or not|
|auth	| Auth settings if set|
|filter	| filter settings if set|

## Delete webhook

To delete configured webhook using the ui, just hit the delete button for the wanted webhook configuration.
To delete a webhook configuration using the API please use the `/webhooks/{yourOrganizationId}/configs/{WebhookId}` endpoint with `DELETE` http call.

After deleting a webhook configuration you are still able to fetch failed and successfully sent events related to the deleted configuration.

To retrieve webhook id you can query the configured webhooks, see [List configured Webhooks](#section/List-configured-Webhooks).

## Edit Webhook

Using the ui in the epilot portal you can very easily edit a webhook config. You will be asked to edit the pre filled form.
To update a webhook configuration using the API please use following endpoint `/webhooks/{yourOrganizationId}/configs/{WebhookId}` using `PUT` http method.
To retrieve webhook id you can query the configured webhooks, see [List configured Webhooks](#section/List-configured-Webhooks).

Additional to this path parameters, the payload to update the webhook configuration is the same we use for creating new webhooks. You can also refer to [Which events are available](#section/Create-Webhook) for more details.

To deactivate or reactivate a webhook configuration, you can make use of this endpoint, providing the organization id and webhook id as path parameter, and your payload should contain same configuration saved except the field `enabled` should either `false` if you want to deactivate the webhook otherwise `true` if the webhook should be active.