import { SqliteDriver } from '@mikro-orm/sqlite';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
const config = {
    driver: SqliteDriver,
    dbName: 'sqlite.db',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    metadataProvider: TsMorphMetadataProvider,
    debug: true,
};
export default config;
//# sourceMappingURL=mikro-orm.config.js.map