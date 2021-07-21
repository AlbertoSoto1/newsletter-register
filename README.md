# Newsletter SignUp

This practice connect with mailchip, a service for schedule newsletter.

First you register on the site.

![newsletter_preview-1](https://user-images.githubusercontent.com/43797347/126402556-a9d20aba-ef57-4758-95f0-47836fbd6498.png)

Second, it sends to you to a new page where the registration status is shown.

![newsletter_preview-2](https://user-images.githubusercontent.com/43797347/126402576-fc62c36f-b006-42d5-ac9c-8628c317539e.png)

The changes on the service is writte in console. It shows the number of members created and more information about it.

### Log in console

```
updated_members: [],
  errors: [],
  total_created: 1,
  total_updated: 0,
  error_count: 0,
  _links: [
    {
      rel: 'self',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json'
    },
    {
      rel: 'parent',
      href: 'https://us19.api.mailchimp.com/3.0/lists',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json'
    },
    {
      rel: 'update',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2',
      method: 'PATCH',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json'
    },
    {
      rel: 'batch-sub-unsub-members',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2',
      method: 'POST',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json'
    },
    {
      rel: 'delete',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2',
      method: 'DELETE'
    },
    {
      rel: 'abuse-reports',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/abuse-reports',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json'
    },
    {
      rel: 'activity',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/activity',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json'
    },
    {
      rel: 'clients',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/clients',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json'
    },
    {
      rel: 'growth-history',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/growth-history',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json'
    },
    {
      rel: 'interest-categories',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/interest-categories',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json', 
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json'
    },
    {
      rel: 'members',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/members',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json'
    },
    {
      rel: 'merge-fields',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/merge-fields',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json',        
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json'
    },
    {
      rel: 'segments',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/segments',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json'
    },
    {
      rel: 'webhooks',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/webhooks',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json'
    },
    {
      rel: 'signup-forms',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/signup-forms',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json',        
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json'
    },
    {
      rel: 'locations',
      href: 'https://us19.api.mailchimp.com/3.0/lists/c843162ed2/locations',
      method: 'GET',
      targetSchema: 'https://us19.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json',
      schema: 'https://us19.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json'
    }
  ]
}
```

Made by Alberto @ <a href="https://www.udemy.com/share/1013gG2@PkdKVF5YSVMOdE9CO0hNfRQ=/">Web Development Bootcamp</a>.
