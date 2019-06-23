import {MigrationInterface, QueryRunner} from "typeorm";

export class first1561332779557 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "poll" ("id" SERIAL NOT NULL, "question" character varying(500) NOT NULL, CONSTRAINT "PK_03b5cf19a7f562b231c3458527e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "poll"`);
    }

}
