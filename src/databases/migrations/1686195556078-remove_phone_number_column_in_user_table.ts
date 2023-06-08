import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemovePhoneNumberColumnInUserTable1686195556078
  implements MigrationInterface
{
  name = 'RemovePhoneNumberColumnInUserTable1686195556078';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "phoneNumber" character varying NOT NULL`,
    );
  }
}
