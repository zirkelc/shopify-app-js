/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Session} from '../../../../lib/session/session';
import {queueMockResponse} from '../../../../lib/__tests__/test-helper';
import {testConfig} from '../../../../lib/__tests__/test-config';
import {ApiVersion} from '../../../../lib/types';
import {shopifyApi} from '../../../../lib';

import {restResources} from '../../2025-04';

describe('Customer resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const session = new Session({
    id: '1234',
    shop: domain,
    state: '1234',
    isOnline: true,
  });
  session.accessToken = 'this_is_a_test_token';

  it('test_1', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 1073339462, "email": "steve.lastnameson@example.com", "created_at": "2025-04-02T11:27:00-05:00", "updated_at": "2025-04-02T11:27:00-05:00", "first_name": "Steve", "last_name": "Lastnameson", "orders_count": 0, "state": "disabled", "total_spent": "0.00", "last_order_id": null, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "", "last_order_name": null, "currency": "USD", "phone": "+15142546011", "addresses": [{"id": 1053317292, "customer_id": 1073339462, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null, "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/1073339462", "default_address": {"id": 1053317292, "customer_id": 1073339462, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}}, {"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:26:48-05:00", "updated_at": "2025-04-02T11:26:48-05:00", "first_name": "Bob", "last_name": "Norman", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}]}));

    await shopify.rest.Customer.all({
      session: session,
      ids: "207119551,1073339462",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: 'ids=207119551%2C1073339462',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 1073339464, "email": "steve.lastnameson@example.com", "created_at": "2025-04-02T11:28:14-05:00", "updated_at": "2025-04-02T11:28:14-05:00", "first_name": "Steve", "last_name": "Lastnameson", "orders_count": 0, "state": "disabled", "total_spent": "0.00", "last_order_id": null, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "", "last_order_name": null, "currency": "USD", "phone": "+15142546011", "addresses": [{"id": 1053317294, "customer_id": 1073339464, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null, "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/1073339464", "default_address": {"id": 1053317294, "customer_id": 1073339464, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}}]}));

    await shopify.rest.Customer.all({
      session: session,
      since_id: "207119551",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: 'since_id=207119551',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:29:34-05:00", "updated_at": "2025-04-02T11:29:34-05:00", "first_name": "Bob", "last_name": "Norman", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}]}));

    await shopify.rest.Customer.all({
      session: session,
      updated_at_min: "2025-04-01 16:29:45",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: 'updated_at_min=2025-04-01+16%3A29%3A45',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_4', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:25:34-05:00", "updated_at": "2025-04-02T11:25:34-05:00", "first_name": "Bob", "last_name": "Norman", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}]}));

    await shopify.rest.Customer.all({
      session: session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_5', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 207119551, "email": "bob.norman@mail.example.com", "tags": "L\u00E9on, No\u00EBl"}]}));

    await shopify.rest.Customer.all({
      session: session,
      fields: "id,email,tags",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: 'fields=id%2Cemail%2Ctags',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_6', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:23:11-05:00", "updated_at": "2025-04-02T11:23:11-05:00", "first_name": "Bob", "last_name": "Norman", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}]}));

    await shopify.rest.Customer.search({
      session: session,
      query: "email:bob.norman@mail.example.com",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/search.json',
      query: 'query=email%3Abob.norman%40mail.example.com',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_7', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 207119551, "email": "bob.norman@mail.example.com", "first_name": "Bob", "last_name": "Norman"}]}));

    await shopify.rest.Customer.search({
      session: session,
      fields: "id, email, first_name, last_name",
      query: "last_name:Norman",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/search.json',
      query: 'fields=id%2C+email%2C+first_name%2C+last_name&query=last_name%3ANorman',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_8', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 1073339460, "email": "isabella.garcia@example.com", "first_name": "Isabella", "last_name": "Garcia", "tags": "New Customer"}]}));

    await shopify.rest.Customer.search({
      session: session,
      fields: "id, email, first_name, last_name, tags",
      query: "customer_tag:New Customer",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/search.json',
      query: 'fields=id%2C+email%2C+first_name%2C+last_name%2C+tags&query=customer_tag%3ANew+Customer',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_9', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:24:33-05:00", "updated_at": "2025-04-02T11:24:33-05:00", "first_name": "Bob", "last_name": "Norman", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}]}));

    await shopify.rest.Customer.search({
      session: session,
      query: "first_name:Bob country:United States",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/search.json',
      query: 'query=first_name%3ABob+country%3AUnited+States',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_10', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:28:42-05:00", "updated_at": "2025-04-02T11:28:42-05:00", "first_name": "Bob", "last_name": "Norman", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}]}));

    await shopify.rest.Customer.search({
      session: session,
      query: "email:*@mail.example.com",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/search.json',
      query: 'query=email%3A%2A%40mail.example.com',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_11', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customers": [{"id": 1073339465, "email": "isabella.garcia@example.com", "first_name": "Isabella", "last_name": "Garcia", "verified_email": true}, {"id": 207119551, "email": "bob.norman@mail.example.com", "first_name": "Bob", "last_name": "Norman", "verified_email": true}]}));

    await shopify.rest.Customer.search({
      session: session,
      fields: "id, email, first_name, last_name, verified_email",
      query: "verified_email:true",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/search.json',
      query: 'fields=id%2C+email%2C+first_name%2C+last_name%2C+verified_email&query=verified_email%3Atrue',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_12', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:25:58-05:00", "updated_at": "2025-04-02T11:25:58-05:00", "first_name": "Bob", "last_name": "Norman", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}}));

    await shopify.rest.Customer.find({
      session: session,
      id: 207119551,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/207119551.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_13', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"email": "bob.norman@mail.example.com", "first_name": "Bob", "last_name": "Norman", "id": 207119551, "created_at": "2025-04-02T11:27:01-05:00", "updated_at": "2025-04-02T11:27:01-05:00", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.id = 207119551;
    customer.metafields = [
      {
        "key": "new",
        "value": "newvalue",
        "type": "single_line_text_field",
        "namespace": "global"
      }
    ];
    await customer.save({});

    expect({
      method: 'PUT',
      domain,
      path: '/admin/api/2025-04/customers/207119551.json',
      query: '',
      headers,
      data: { "customer": {"metafields": [{"key": "new", "value": "newvalue", "type": "single_line_text_field", "namespace": "global"}]} }
    }).toMatchMadeHttpRequest();
  });

  it('test_14', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"email": "bob.norman@mail.example.com", "first_name": "Bob", "last_name": "Norman", "id": 207119551, "created_at": "2025-04-02T11:23:23-05:00", "updated_at": "2025-04-02T11:23:23-05:00", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.id = 207119551;
    customer.accepts_marketing = true;
    customer.accepts_marketing_updated_at = "2024-12-30T11:23:34-05:00";
    customer.marketing_opt_in_level = "confirmed_opt_in";
    await customer.save({});

    expect({
      method: 'PUT',
      domain,
      path: '/admin/api/2025-04/customers/207119551.json',
      query: '',
      headers,
      data: { "customer": {"accepts_marketing": true, "accepts_marketing_updated_at": "2024-12-30T11:23:34-05:00", "marketing_opt_in_level": "confirmed_opt_in"} }
    }).toMatchMadeHttpRequest();
  });

  it('test_15', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"email": "bob.norman@mail.example.com", "first_name": "Bob", "last_name": "Norman", "id": 207119551, "created_at": "2025-04-02T11:23:47-05:00", "updated_at": "2025-04-02T11:23:47-05:00", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "New Customer, Repeat Customer", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.id = 207119551;
    customer.tags = "New Customer, Repeat Customer";
    await customer.save({});

    expect({
      method: 'PUT',
      domain,
      path: '/admin/api/2025-04/customers/207119551.json',
      query: '',
      headers,
      data: { "customer": {"tags": "New Customer, Repeat Customer"} }
    }).toMatchMadeHttpRequest();
  });

  it('test_16', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"email": "changed@example.com", "note": "Customer is a great guy", "first_name": "Bob", "last_name": "Norman", "id": 207119551, "created_at": "2025-04-02T11:24:21-05:00", "updated_at": "2025-04-02T11:24:32-05:00", "orders_count": 1, "state": "disabled", "total_spent": "199.65", "last_order_id": 450789469, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "L\u00E9on, No\u00EBl", "last_order_name": "#1001", "currency": "USD", "phone": "+16136120707", "addresses": [{"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.id = 207119551;
    customer.email = "changed@example.com";
    customer.note = "Customer is a great guy";
    await customer.save({});

    expect({
      method: 'PUT',
      domain,
      path: '/admin/api/2025-04/customers/207119551.json',
      query: '',
      headers,
      data: { "customer": {"email": "changed@example.com", "note": "Customer is a great guy"} }
    }).toMatchMadeHttpRequest();
  });

  it('test_17', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Customer.delete({
      session: session,
      id: 207119551,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2025-04/customers/207119551.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_18', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"id": 1073339458, "email": "steve.lastnameson@example.com", "created_at": "2025-04-02T11:23:46-05:00", "updated_at": "2025-04-02T11:23:46-05:00", "first_name": "Steve", "last_name": "Lastnameson", "orders_count": 0, "state": "enabled", "total_spent": "0.00", "last_order_id": null, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "", "last_order_name": null, "currency": "USD", "phone": "+15142546011", "addresses": [{"id": 1053317288, "customer_id": 1073339458, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null, "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/1073339458", "default_address": {"id": 1053317288, "customer_id": 1073339458, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.first_name = "Steve";
    customer.last_name = "Lastnameson";
    customer.email = "steve.lastnameson@example.com";
    customer.phone = "+15142546011";
    customer.verified_email = true;
    customer.addresses = [
      {
        "address1": "123 Oak St",
        "city": "Ottawa",
        "province": "ON",
        "phone": "555-1212",
        "zip": "123 ABC",
        "last_name": "Lastnameson",
        "first_name": "Mother",
        "country": "CA"
      }
    ];
    customer.password = "newpass";
    customer.password_confirmation = "newpass";
    customer.send_email_welcome = false;
    await customer.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: '',
      headers,
      data: { "customer": {"first_name": "Steve", "last_name": "Lastnameson", "email": "steve.lastnameson@example.com", "phone": "+15142546011", "verified_email": true, "addresses": [{"address1": "123 Oak St", "city": "Ottawa", "province": "ON", "phone": "555-1212", "zip": "123 ABC", "last_name": "Lastnameson", "first_name": "Mother", "country": "CA"}], "password": "newpass", "password_confirmation": "newpass", "send_email_welcome": false} }
    }).toMatchMadeHttpRequest();
  });

  it('test_19', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"id": 1073339459, "email": "steve.lastnameson@example.com", "created_at": "2025-04-02T11:24:21-05:00", "updated_at": "2025-04-02T11:24:21-05:00", "first_name": "Steve", "last_name": "Lastnameson", "orders_count": 0, "state": "disabled", "total_spent": "0.00", "last_order_id": null, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "", "last_order_name": null, "currency": "USD", "phone": "+15142546011", "addresses": [{"id": 1053317289, "customer_id": 1073339459, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null, "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/1073339459", "default_address": {"id": 1053317289, "customer_id": 1073339459, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.first_name = "Steve";
    customer.last_name = "Lastnameson";
    customer.email = "steve.lastnameson@example.com";
    customer.phone = "+15142546011";
    customer.verified_email = true;
    customer.addresses = [
      {
        "address1": "123 Oak St",
        "city": "Ottawa",
        "province": "ON",
        "phone": "555-1212",
        "zip": "123 ABC",
        "last_name": "Lastnameson",
        "first_name": "Mother",
        "country": "CA"
      }
    ];
    customer.send_email_invite = true;
    await customer.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: '',
      headers,
      data: { "customer": {"first_name": "Steve", "last_name": "Lastnameson", "email": "steve.lastnameson@example.com", "phone": "+15142546011", "verified_email": true, "addresses": [{"address1": "123 Oak St", "city": "Ottawa", "province": "ON", "phone": "555-1212", "zip": "123 ABC", "last_name": "Lastnameson", "first_name": "Mother", "country": "CA"}], "send_email_invite": true} }
    }).toMatchMadeHttpRequest();
  });

  it('test_20', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"id": 1073339466, "email": "steve.lastnameson@example.com", "created_at": "2025-04-02T11:29:08-05:00", "updated_at": "2025-04-02T11:29:08-05:00", "first_name": "Steve", "last_name": "Lastnameson", "orders_count": 0, "state": "disabled", "total_spent": "0.00", "last_order_id": null, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "", "last_order_name": null, "currency": "USD", "phone": "+15142546011", "addresses": [{"id": 1053317296, "customer_id": 1073339466, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null, "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/1073339466", "default_address": {"id": 1053317296, "customer_id": 1073339466, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.first_name = "Steve";
    customer.last_name = "Lastnameson";
    customer.email = "steve.lastnameson@example.com";
    customer.phone = "+15142546011";
    customer.verified_email = true;
    customer.addresses = [
      {
        "address1": "123 Oak St",
        "city": "Ottawa",
        "province": "ON",
        "phone": "555-1212",
        "zip": "123 ABC",
        "last_name": "Lastnameson",
        "first_name": "Mother",
        "country": "CA"
      }
    ];
    customer.metafields = [
      {
        "key": "new",
        "value": "newvalue",
        "type": "single_line_text_field",
        "namespace": "global"
      }
    ];
    await customer.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: '',
      headers,
      data: { "customer": {"first_name": "Steve", "last_name": "Lastnameson", "email": "steve.lastnameson@example.com", "phone": "+15142546011", "verified_email": true, "addresses": [{"address1": "123 Oak St", "city": "Ottawa", "province": "ON", "phone": "555-1212", "zip": "123 ABC", "last_name": "Lastnameson", "first_name": "Mother", "country": "CA"}], "metafields": [{"key": "new", "value": "newvalue", "type": "single_line_text_field", "namespace": "global"}]} }
    }).toMatchMadeHttpRequest();
  });

  it('test_21', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer": {"id": 1073339463, "email": "steve.lastnameson@example.com", "created_at": "2025-04-02T11:27:37-05:00", "updated_at": "2025-04-02T11:27:37-05:00", "first_name": "Steve", "last_name": "Lastnameson", "orders_count": 0, "state": "disabled", "total_spent": "0.00", "last_order_id": null, "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "tags": "", "last_order_name": null, "currency": "USD", "phone": "+15142546011", "addresses": [{"id": 1053317293, "customer_id": 1073339463, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}], "tax_exemptions": [], "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": null, "consent_collected_from": "OTHER"}, "admin_graphql_api_id": "gid://shopify/Customer/1073339463", "default_address": {"id": 1053317293, "customer_id": 1073339463, "first_name": "Mother", "last_name": "Lastnameson", "company": null, "address1": "123 Oak St", "address2": null, "city": "Ottawa", "province": "Ontario", "country": "Canada", "zip": "123 ABC", "phone": "555-1212", "name": "Mother Lastnameson", "province_code": "ON", "country_code": "CA", "country_name": "Canada", "default": true}}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.first_name = "Steve";
    customer.last_name = "Lastnameson";
    customer.email = "steve.lastnameson@example.com";
    customer.phone = "+15142546011";
    customer.verified_email = true;
    customer.addresses = [
      {
        "address1": "123 Oak St",
        "city": "Ottawa",
        "province": "ON",
        "phone": "555-1212",
        "zip": "123 ABC",
        "last_name": "Lastnameson",
        "first_name": "Mother",
        "country": "CA"
      }
    ];
    await customer.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/customers.json',
      query: '',
      headers,
      data: { "customer": {"first_name": "Steve", "last_name": "Lastnameson", "email": "steve.lastnameson@example.com", "phone": "+15142546011", "verified_email": true, "addresses": [{"address1": "123 Oak St", "city": "Ottawa", "province": "ON", "phone": "555-1212", "zip": "123 ABC", "last_name": "Lastnameson", "first_name": "Mother", "country": "CA"}]} }
    }).toMatchMadeHttpRequest();
  });

  it('test_22', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"account_activation_url": "https://jsmith.myshopify.com/account/activate/207119551/11bae3857fe3f4ab2ff807da447dd1db-1735835208"}));

    const customer = new shopify.rest.Customer({session: session});
    customer.id = 207119551;
    await customer.account_activation_url({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/customers/207119551/account_activation_url.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_23', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer_invite": {"to": "new_test_email@shopify.com", "from": "j.limited@example.com", "subject": "Welcome to my new shop", "custom_message": "My awesome new store", "bcc": ["j.limited@example.com"]}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.id = 207119551;
    await customer.send_invite({
      body: {"customer_invite": {"to": "new_test_email@shopify.com", "from": "j.limited@example.com", "bcc": ["j.limited@example.com"], "subject": "Welcome to my new shop", "custom_message": "My awesome new store"}},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/customers/207119551/send_invite.json',
      query: '',
      headers,
      data: {"customer_invite": {"to": "new_test_email@shopify.com", "from": "j.limited@example.com", "bcc": ["j.limited@example.com"], "subject": "Welcome to my new shop", "custom_message": "My awesome new store"}}
    }).toMatchMadeHttpRequest();
  });

  it('test_24', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"customer_invite": {"to": "bob.norman@mail.example.com", "from": "j.smith@example.com", "subject": "Customer account activation", "custom_message": "", "bcc": []}}));

    const customer = new shopify.rest.Customer({session: session});
    customer.id = 207119551;
    await customer.send_invite({
      body: {"customer_invite": {}},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2025-04/customers/207119551/send_invite.json',
      query: '',
      headers,
      data: {"customer_invite": {}}
    }).toMatchMadeHttpRequest();
  });

  it('test_25', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Customer.count({
      session: session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_26', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Customer.count({
      session: session,
      updated_at_min: "2025-04-01 16:27:48",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/count.json',
      query: 'updated_at_min=2025-04-01+16%3A27%3A48',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_27', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Customer.count({
      session: session,
      created_at_min: "2025-04-01 16:25:57",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/count.json',
      query: 'created_at_min=2025-04-01+16%3A25%3A57',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_28', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"orders": [{"id": 450789469, "admin_graphql_api_id": "gid://shopify/Order/450789469", "app_id": null, "browser_ip": "0.0.0.0", "buyer_accepts_marketing": false, "cancel_reason": null, "cancelled_at": null, "cart_token": "68778783ad298f1c80c3bafcddeea02f", "checkout_id": 901414060, "checkout_token": "bd5a8aa1ecd019dd3520ff791ee3a24c", "client_details": {"accept_language": null, "browser_height": null, "browser_ip": "0.0.0.0", "browser_width": null, "session_hash": null, "user_agent": null}, "closed_at": null, "confirmation_number": null, "confirmed": true, "contact_email": "bob.norman@mail.example.com", "created_at": "2008-01-10T11:00:00-05:00", "currency": "USD", "current_subtotal_price": "195.67", "current_subtotal_price_set": {"shop_money": {"amount": "195.67", "currency_code": "USD"}, "presentment_money": {"amount": "195.67", "currency_code": "USD"}}, "current_total_additional_fees_set": null, "current_total_discounts": "3.33", "current_total_discounts_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}, "current_total_duties_set": null, "current_total_price": "199.65", "current_total_price_set": {"shop_money": {"amount": "199.65", "currency_code": "USD"}, "presentment_money": {"amount": "199.65", "currency_code": "USD"}}, "current_total_tax": "3.98", "current_total_tax_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "customer_locale": null, "device_id": null, "discount_codes": [{"code": "TENOFF", "amount": "10.00", "type": "fixed_amount"}], "duties_included": false, "email": "bob.norman@mail.example.com", "estimated_taxes": false, "financial_status": "partially_refunded", "fulfillment_status": null, "landing_site": "http://www.example.com?source=abc", "landing_site_ref": "abc", "location_id": null, "merchant_business_entity_id": "MTU0ODM4MDAwOQ", "merchant_of_record_app_id": null, "name": "#1001", "note": null, "note_attributes": [{"name": "custom engraving", "value": "Happy Birthday"}, {"name": "colour", "value": "green"}], "number": 1, "order_number": 1001, "order_status_url": "https://jsmith.myshopify.com/548380009/orders/b1946ac92492d2347c6235b4d2611184/authenticate?key=imasecretipod", "original_total_additional_fees_set": null, "original_total_duties_set": null, "payment_gateway_names": ["bogus"], "phone": "+557734881234", "po_number": "ABC123", "presentment_currency": "USD", "processed_at": "2008-01-10T11:00:00-05:00", "reference": "fhwdgads", "referring_site": "http://www.otherexample.com", "source_identifier": "fhwdgads", "source_name": "web", "source_url": null, "subtotal_price": "597.00", "subtotal_price_set": {"shop_money": {"amount": "597.00", "currency_code": "USD"}, "presentment_money": {"amount": "597.00", "currency_code": "USD"}}, "tags": "", "tax_exempt": false, "tax_lines": [{"price": "11.94", "rate": 0.06, "title": "State Tax", "price_set": {"shop_money": {"amount": "11.94", "currency_code": "USD"}, "presentment_money": {"amount": "11.94", "currency_code": "USD"}}, "channel_liable": null}], "taxes_included": false, "test": false, "token": "b1946ac92492d2347c6235b4d2611184", "total_cash_rounding_payment_adjustment_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "total_cash_rounding_refund_adjustment_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "total_discounts": "10.00", "total_discounts_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_line_items_price": "597.00", "total_line_items_price_set": {"shop_money": {"amount": "597.00", "currency_code": "USD"}, "presentment_money": {"amount": "597.00", "currency_code": "USD"}}, "total_outstanding": "0.00", "total_price": "598.94", "total_price_set": {"shop_money": {"amount": "598.94", "currency_code": "USD"}, "presentment_money": {"amount": "598.94", "currency_code": "USD"}}, "total_shipping_price_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "total_tax": "11.94", "total_tax_set": {"shop_money": {"amount": "11.94", "currency_code": "USD"}, "presentment_money": {"amount": "11.94", "currency_code": "USD"}}, "total_tip_received": "0.00", "total_weight": 0, "updated_at": "2008-01-10T11:00:00-05:00", "user_id": null, "billing_address": {"first_name": "Bob", "address1": "Chestnut Street 92", "phone": "+1(502)-459-2181", "city": "Louisville", "zip": "40202", "province": "Kentucky", "country": "United States", "last_name": "Norman", "address2": "", "company": null, "latitude": 45.41634, "longitude": -75.6868, "name": "Bob Norman", "country_code": "US", "province_code": "KY"}, "customer": {"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:27:13-05:00", "updated_at": "2025-04-02T11:27:13-05:00", "first_name": "Bob", "last_name": "Norman", "state": "disabled", "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "phone": "+16136120707", "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "tags": "L\u00E9on, No\u00EBl", "currency": "USD", "tax_exemptions": [], "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}, "discount_applications": [{"target_type": "line_item", "type": "discount_code", "value": "10.0", "value_type": "fixed_amount", "allocation_method": "across", "target_selection": "all", "code": "TENOFF"}], "fulfillments": [{"id": 255858046, "admin_graphql_api_id": "gid://shopify/Fulfillment/255858046", "created_at": "2025-04-02T11:27:13-05:00", "location_id": 655441491, "name": "#1001.0", "order_id": 450789469, "origin_address": {}, "receipt": {"testcase": true, "authorization": "123456"}, "service": "manual", "shipment_status": null, "status": "failure", "tracking_company": "USPS", "tracking_number": "1Z1234512345123456", "tracking_numbers": ["1Z1234512345123456"], "tracking_url": "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z1234512345123456", "tracking_urls": ["https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z1234512345123456"], "updated_at": "2025-04-02T11:27:13-05:00", "line_items": [{"id": 466157049, "admin_graphql_api_id": "gid://shopify/LineItem/466157049", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - green", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [{"name": "Custom Engraving Front", "value": "Happy Birthday"}, {"name": "Custom Engraving Back", "value": "Merry Christmas"}], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008GREEN", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 39072856, "variant_inventory_management": "shopify", "variant_title": "green", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.34", "amount_set": {"shop_money": {"amount": "3.34", "currency_code": "USD"}, "presentment_money": {"amount": "3.34", "currency_code": "USD"}}, "discount_application_index": 0}]}]}], "line_items": [{"id": 466157049, "admin_graphql_api_id": "gid://shopify/LineItem/466157049", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - green", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [{"name": "Custom Engraving Front", "value": "Happy Birthday"}, {"name": "Custom Engraving Back", "value": "Merry Christmas"}], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008GREEN", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 39072856, "variant_inventory_management": "shopify", "variant_title": "green", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.34", "amount_set": {"shop_money": {"amount": "3.34", "currency_code": "USD"}, "presentment_money": {"amount": "3.34", "currency_code": "USD"}}, "discount_application_index": 0}]}, {"id": 518995019, "admin_graphql_api_id": "gid://shopify/LineItem/518995019", "attributed_staffs": [], "current_quantity": 1, "fulfillable_quantity": 1, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - red", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008RED", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 49148385, "variant_inventory_management": "shopify", "variant_title": "red", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.33", "amount_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}, "discount_application_index": 0}]}, {"id": 703073504, "admin_graphql_api_id": "gid://shopify/LineItem/703073504", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - black", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008BLACK", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 457924702, "variant_inventory_management": "shopify", "variant_title": "black", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.33", "amount_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}, "discount_application_index": 0}]}], "payment_terms": null, "refunds": [{"id": 509562969, "admin_graphql_api_id": "gid://shopify/Refund/509562969", "created_at": "2025-04-02T11:27:13-05:00", "note": "it broke during shipping", "order_id": 450789469, "processed_at": "2025-04-02T11:27:13-05:00", "restock": true, "total_additional_fees_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "total_duties_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "user_id": 548380009, "order_adjustments": [], "transactions": [{"id": 179259969, "admin_graphql_api_id": "gid://shopify/OrderTransaction/179259969", "amount": "209.00", "authorization": "authorization-key", "created_at": "2005-08-05T12:59:12-04:00", "currency": "USD", "device_id": null, "error_code": null, "gateway": "bogus", "kind": "refund", "location_id": null, "message": null, "order_id": 450789469, "parent_id": 801038806, "payment_id": "#1001.3", "processed_at": "2005-08-05T12:59:12-04:00", "receipt": {}, "source_name": "web", "status": "success", "test": false, "user_id": null}], "refund_line_items": [{"id": 104689539, "line_item_id": 703073504, "location_id": 487838322, "quantity": 1, "restock_type": "legacy_restock", "subtotal": 195.66, "subtotal_set": {"shop_money": {"amount": "195.66", "currency_code": "USD"}, "presentment_money": {"amount": "195.66", "currency_code": "USD"}}, "total_tax": 3.98, "total_tax_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "line_item": {"id": 703073504, "admin_graphql_api_id": "gid://shopify/LineItem/703073504", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - black", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008BLACK", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 457924702, "variant_inventory_management": "shopify", "variant_title": "black", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.33", "amount_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}, "discount_application_index": 0}]}}, {"id": 709875399, "line_item_id": 466157049, "location_id": 487838322, "quantity": 1, "restock_type": "legacy_restock", "subtotal": 195.67, "subtotal_set": {"shop_money": {"amount": "195.67", "currency_code": "USD"}, "presentment_money": {"amount": "195.67", "currency_code": "USD"}}, "total_tax": 3.98, "total_tax_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "line_item": {"id": 466157049, "admin_graphql_api_id": "gid://shopify/LineItem/466157049", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - green", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [{"name": "Custom Engraving Front", "value": "Happy Birthday"}, {"name": "Custom Engraving Back", "value": "Merry Christmas"}], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008GREEN", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 39072856, "variant_inventory_management": "shopify", "variant_title": "green", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.34", "amount_set": {"shop_money": {"amount": "3.34", "currency_code": "USD"}, "presentment_money": {"amount": "3.34", "currency_code": "USD"}}, "discount_application_index": 0}]}}], "duties": [], "additional_fees": []}], "shipping_address": {"first_name": "Bob", "address1": "Chestnut Street 92", "phone": "+1(502)-459-2181", "city": "Louisville", "zip": "40202", "province": "Kentucky", "country": "United States", "last_name": "Norman", "address2": "", "company": null, "latitude": 45.41634, "longitude": -75.6868, "name": "Bob Norman", "country_code": "US", "province_code": "KY"}, "shipping_lines": [{"id": 369256396, "carrier_identifier": null, "code": "Free Shipping", "discounted_price": "0.00", "discounted_price_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "is_removed": false, "phone": null, "price": "0.00", "price_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "requested_fulfillment_service_id": null, "source": "shopify", "title": "Free Shipping", "tax_lines": [], "discount_allocations": []}]}]}));

    await shopify.rest.Customer.orders({
      session: session,
      id: 207119551,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/207119551/orders.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_29', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.April25, restResources}),
    );

    queueMockResponse(JSON.stringify({"orders": [{"id": 450789469, "admin_graphql_api_id": "gid://shopify/Order/450789469", "app_id": null, "browser_ip": "0.0.0.0", "buyer_accepts_marketing": false, "cancel_reason": null, "cancelled_at": null, "cart_token": "68778783ad298f1c80c3bafcddeea02f", "checkout_id": 901414060, "checkout_token": "bd5a8aa1ecd019dd3520ff791ee3a24c", "client_details": {"accept_language": null, "browser_height": null, "browser_ip": "0.0.0.0", "browser_width": null, "session_hash": null, "user_agent": null}, "closed_at": null, "confirmation_number": null, "confirmed": true, "contact_email": "bob.norman@mail.example.com", "created_at": "2008-01-10T11:00:00-05:00", "currency": "USD", "current_subtotal_price": "195.67", "current_subtotal_price_set": {"shop_money": {"amount": "195.67", "currency_code": "USD"}, "presentment_money": {"amount": "195.67", "currency_code": "USD"}}, "current_total_additional_fees_set": null, "current_total_discounts": "3.33", "current_total_discounts_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}, "current_total_duties_set": null, "current_total_price": "199.65", "current_total_price_set": {"shop_money": {"amount": "199.65", "currency_code": "USD"}, "presentment_money": {"amount": "199.65", "currency_code": "USD"}}, "current_total_tax": "3.98", "current_total_tax_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "customer_locale": null, "device_id": null, "discount_codes": [{"code": "TENOFF", "amount": "10.00", "type": "fixed_amount"}], "duties_included": false, "email": "bob.norman@mail.example.com", "estimated_taxes": false, "financial_status": "partially_refunded", "fulfillment_status": null, "landing_site": "http://www.example.com?source=abc", "landing_site_ref": "abc", "location_id": null, "merchant_business_entity_id": "MTU0ODM4MDAwOQ", "merchant_of_record_app_id": null, "name": "#1001", "note": null, "note_attributes": [{"name": "custom engraving", "value": "Happy Birthday"}, {"name": "colour", "value": "green"}], "number": 1, "order_number": 1001, "order_status_url": "https://jsmith.myshopify.com/548380009/orders/b1946ac92492d2347c6235b4d2611184/authenticate?key=imasecretipod", "original_total_additional_fees_set": null, "original_total_duties_set": null, "payment_gateway_names": ["bogus"], "phone": "+557734881234", "po_number": "ABC123", "presentment_currency": "USD", "processed_at": "2008-01-10T11:00:00-05:00", "reference": "fhwdgads", "referring_site": "http://www.otherexample.com", "source_identifier": "fhwdgads", "source_name": "web", "source_url": null, "subtotal_price": "597.00", "subtotal_price_set": {"shop_money": {"amount": "597.00", "currency_code": "USD"}, "presentment_money": {"amount": "597.00", "currency_code": "USD"}}, "tags": "", "tax_exempt": false, "tax_lines": [{"price": "11.94", "rate": 0.06, "title": "State Tax", "price_set": {"shop_money": {"amount": "11.94", "currency_code": "USD"}, "presentment_money": {"amount": "11.94", "currency_code": "USD"}}, "channel_liable": null}], "taxes_included": false, "test": false, "token": "b1946ac92492d2347c6235b4d2611184", "total_cash_rounding_payment_adjustment_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "total_cash_rounding_refund_adjustment_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "total_discounts": "10.00", "total_discounts_set": {"shop_money": {"amount": "10.00", "currency_code": "USD"}, "presentment_money": {"amount": "10.00", "currency_code": "USD"}}, "total_line_items_price": "597.00", "total_line_items_price_set": {"shop_money": {"amount": "597.00", "currency_code": "USD"}, "presentment_money": {"amount": "597.00", "currency_code": "USD"}}, "total_outstanding": "0.00", "total_price": "598.94", "total_price_set": {"shop_money": {"amount": "598.94", "currency_code": "USD"}, "presentment_money": {"amount": "598.94", "currency_code": "USD"}}, "total_shipping_price_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "total_tax": "11.94", "total_tax_set": {"shop_money": {"amount": "11.94", "currency_code": "USD"}, "presentment_money": {"amount": "11.94", "currency_code": "USD"}}, "total_tip_received": "0.00", "total_weight": 0, "updated_at": "2008-01-10T11:00:00-05:00", "user_id": null, "billing_address": {"first_name": "Bob", "address1": "Chestnut Street 92", "phone": "+1(502)-459-2181", "city": "Louisville", "zip": "40202", "province": "Kentucky", "country": "United States", "last_name": "Norman", "address2": "", "company": null, "latitude": 45.41634, "longitude": -75.6868, "name": "Bob Norman", "country_code": "US", "province_code": "KY"}, "customer": {"id": 207119551, "email": "bob.norman@mail.example.com", "created_at": "2025-04-02T11:25:09-05:00", "updated_at": "2025-04-02T11:25:09-05:00", "first_name": "Bob", "last_name": "Norman", "state": "disabled", "note": null, "verified_email": true, "multipass_identifier": null, "tax_exempt": false, "phone": "+16136120707", "email_marketing_consent": {"state": "not_subscribed", "opt_in_level": null, "consent_updated_at": "2004-06-13T11:57:11-04:00"}, "sms_marketing_consent": {"state": "not_subscribed", "opt_in_level": "single_opt_in", "consent_updated_at": "2024-01-01T07:00:00-05:00", "consent_collected_from": "OTHER"}, "tags": "L\u00E9on, No\u00EBl", "currency": "USD", "tax_exemptions": [], "admin_graphql_api_id": "gid://shopify/Customer/207119551", "default_address": {"id": 207119551, "customer_id": 207119551, "first_name": null, "last_name": null, "company": null, "address1": "Chestnut Street 92", "address2": "", "city": "Louisville", "province": "Kentucky", "country": "United States", "zip": "40202", "phone": "555-625-1199", "name": "", "province_code": "KY", "country_code": "US", "country_name": "United States", "default": true}}, "discount_applications": [{"target_type": "line_item", "type": "discount_code", "value": "10.0", "value_type": "fixed_amount", "allocation_method": "across", "target_selection": "all", "code": "TENOFF"}], "fulfillments": [{"id": 255858046, "admin_graphql_api_id": "gid://shopify/Fulfillment/255858046", "created_at": "2025-04-02T11:25:09-05:00", "location_id": 655441491, "name": "#1001.0", "order_id": 450789469, "origin_address": {}, "receipt": {"testcase": true, "authorization": "123456"}, "service": "manual", "shipment_status": null, "status": "failure", "tracking_company": "USPS", "tracking_number": "1Z1234512345123456", "tracking_numbers": ["1Z1234512345123456"], "tracking_url": "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z1234512345123456", "tracking_urls": ["https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z1234512345123456"], "updated_at": "2025-04-02T11:25:09-05:00", "line_items": [{"id": 466157049, "admin_graphql_api_id": "gid://shopify/LineItem/466157049", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - green", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [{"name": "Custom Engraving Front", "value": "Happy Birthday"}, {"name": "Custom Engraving Back", "value": "Merry Christmas"}], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008GREEN", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 39072856, "variant_inventory_management": "shopify", "variant_title": "green", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.34", "amount_set": {"shop_money": {"amount": "3.34", "currency_code": "USD"}, "presentment_money": {"amount": "3.34", "currency_code": "USD"}}, "discount_application_index": 0}]}]}], "line_items": [{"id": 466157049, "admin_graphql_api_id": "gid://shopify/LineItem/466157049", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - green", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [{"name": "Custom Engraving Front", "value": "Happy Birthday"}, {"name": "Custom Engraving Back", "value": "Merry Christmas"}], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008GREEN", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 39072856, "variant_inventory_management": "shopify", "variant_title": "green", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.34", "amount_set": {"shop_money": {"amount": "3.34", "currency_code": "USD"}, "presentment_money": {"amount": "3.34", "currency_code": "USD"}}, "discount_application_index": 0}]}, {"id": 518995019, "admin_graphql_api_id": "gid://shopify/LineItem/518995019", "attributed_staffs": [], "current_quantity": 1, "fulfillable_quantity": 1, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - red", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008RED", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 49148385, "variant_inventory_management": "shopify", "variant_title": "red", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.33", "amount_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}, "discount_application_index": 0}]}, {"id": 703073504, "admin_graphql_api_id": "gid://shopify/LineItem/703073504", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - black", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008BLACK", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 457924702, "variant_inventory_management": "shopify", "variant_title": "black", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.33", "amount_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}, "discount_application_index": 0}]}], "payment_terms": null, "refunds": [{"id": 509562969, "admin_graphql_api_id": "gid://shopify/Refund/509562969", "created_at": "2025-04-02T11:25:09-05:00", "note": "it broke during shipping", "order_id": 450789469, "processed_at": "2025-04-02T11:25:09-05:00", "restock": true, "total_additional_fees_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "total_duties_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "user_id": 548380009, "order_adjustments": [], "transactions": [{"id": 179259969, "admin_graphql_api_id": "gid://shopify/OrderTransaction/179259969", "amount": "209.00", "authorization": "authorization-key", "created_at": "2005-08-05T12:59:12-04:00", "currency": "USD", "device_id": null, "error_code": null, "gateway": "bogus", "kind": "refund", "location_id": null, "message": null, "order_id": 450789469, "parent_id": 801038806, "payment_id": "#1001.3", "processed_at": "2005-08-05T12:59:12-04:00", "receipt": {}, "source_name": "web", "status": "success", "test": false, "user_id": null}], "refund_line_items": [{"id": 104689539, "line_item_id": 703073504, "location_id": 487838322, "quantity": 1, "restock_type": "legacy_restock", "subtotal": 195.66, "subtotal_set": {"shop_money": {"amount": "195.66", "currency_code": "USD"}, "presentment_money": {"amount": "195.66", "currency_code": "USD"}}, "total_tax": 3.98, "total_tax_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "line_item": {"id": 703073504, "admin_graphql_api_id": "gid://shopify/LineItem/703073504", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - black", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008BLACK", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 457924702, "variant_inventory_management": "shopify", "variant_title": "black", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.33", "amount_set": {"shop_money": {"amount": "3.33", "currency_code": "USD"}, "presentment_money": {"amount": "3.33", "currency_code": "USD"}}, "discount_application_index": 0}]}}, {"id": 709875399, "line_item_id": 466157049, "location_id": 487838322, "quantity": 1, "restock_type": "legacy_restock", "subtotal": 195.67, "subtotal_set": {"shop_money": {"amount": "195.67", "currency_code": "USD"}, "presentment_money": {"amount": "195.67", "currency_code": "USD"}}, "total_tax": 3.98, "total_tax_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "line_item": {"id": 466157049, "admin_graphql_api_id": "gid://shopify/LineItem/466157049", "attributed_staffs": [], "current_quantity": 0, "fulfillable_quantity": 0, "fulfillment_service": "manual", "fulfillment_status": null, "gift_card": false, "grams": 200, "name": "IPod Nano - 8gb - green", "price": "199.00", "price_set": {"shop_money": {"amount": "199.00", "currency_code": "USD"}, "presentment_money": {"amount": "199.00", "currency_code": "USD"}}, "product_exists": true, "product_id": 632910392, "properties": [{"name": "Custom Engraving Front", "value": "Happy Birthday"}, {"name": "Custom Engraving Back", "value": "Merry Christmas"}], "quantity": 1, "requires_shipping": true, "sku": "IPOD2008GREEN", "taxable": true, "title": "IPod Nano - 8gb", "total_discount": "0.00", "total_discount_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "variant_id": 39072856, "variant_inventory_management": "shopify", "variant_title": "green", "vendor": null, "tax_lines": [{"channel_liable": null, "price": "3.98", "price_set": {"shop_money": {"amount": "3.98", "currency_code": "USD"}, "presentment_money": {"amount": "3.98", "currency_code": "USD"}}, "rate": 0.06, "title": "State Tax"}], "duties": [], "discount_allocations": [{"amount": "3.34", "amount_set": {"shop_money": {"amount": "3.34", "currency_code": "USD"}, "presentment_money": {"amount": "3.34", "currency_code": "USD"}}, "discount_application_index": 0}]}}], "duties": [], "additional_fees": []}], "shipping_address": {"first_name": "Bob", "address1": "Chestnut Street 92", "phone": "+1(502)-459-2181", "city": "Louisville", "zip": "40202", "province": "Kentucky", "country": "United States", "last_name": "Norman", "address2": "", "company": null, "latitude": 45.41634, "longitude": -75.6868, "name": "Bob Norman", "country_code": "US", "province_code": "KY"}, "shipping_lines": [{"id": 369256396, "carrier_identifier": null, "code": "Free Shipping", "discounted_price": "0.00", "discounted_price_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "is_removed": false, "phone": null, "price": "0.00", "price_set": {"shop_money": {"amount": "0.00", "currency_code": "USD"}, "presentment_money": {"amount": "0.00", "currency_code": "USD"}}, "requested_fulfillment_service_id": null, "source": "shopify", "title": "Free Shipping", "tax_lines": [], "discount_allocations": []}]}]}));

    await shopify.rest.Customer.orders({
      session: session,
      id: 207119551,
      status: "any",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2025-04/customers/207119551/orders.json',
      query: 'status=any',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

});
