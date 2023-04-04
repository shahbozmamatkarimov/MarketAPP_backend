import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../user/entities/user.entity";

interface ProductTypeAttr{
    type: string;
}

@Table({tableName: 'comments'})
export class ProductType extends Model<ProductType, ProductTypeAttr> {
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
    type: string;
}
