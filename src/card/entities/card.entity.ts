import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../user/entities/user.entity";

interface CardAttr {
    type: string;
    user_id: number;
    createdAt: Date;
}

@Table({ tableName: 'cart' })
export class Card extends Model<Card, CardAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    type: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    user_id: number;

    @Column({
        type: DataType.DATE,
        allowNull: true,
        defaultValue: new Date
    })
    createdAt: Date;
}
