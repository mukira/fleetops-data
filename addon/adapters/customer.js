import ApplicationAdapter from '@lipagas/ember-core/adapters/application';

export default class CustomerAdapter extends ApplicationAdapter {
    urlForQuery() {
        return `${this.host}/${this.namespace}/query/customers`;
    }
}
