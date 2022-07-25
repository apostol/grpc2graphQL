import { DataSource, DataSourceConfig } from 'apollo-datasource';

export default abstract class GRPCDataSource<TContext = any> extends DataSource<TContext> {
  context!: TContext;
  client!: any;

  constructor() {
    super();
  }

  initialize(config: DataSourceConfig<any>): void {
    this.context = config.context;
  }

};