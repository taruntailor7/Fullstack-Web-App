import { MikroORM, } from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { __prod__ } from './constant.js';
import { Post } from '../dist/entities/Post.js';

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'lireddit',
        driver: SqliteDriver,
        entities: [Post], // dist/**/*.Post.js
        entitiesTs: ['./entities/Post.ts'],
        metadataProvider: TsMorphMetadataProvider,
        debug: !__prod__,
        allowGlobalContext: true,
    });

    const post = new Post();
    post.title = 'My First title';
    // first way
    orm.em.persist(post);
    await orm.em.flush();
    
    // second way
    // await em.persist(post).flush();
};

main();