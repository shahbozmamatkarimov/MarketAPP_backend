import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RegionAttr{
    region: string;
}

@Table({tableName: 'region'})
export class Region extends Model<Region, RegionAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    region: string;
}
