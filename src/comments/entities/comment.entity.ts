import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../user/entities/user.entity";

interface CommentsAttr{
    comment: string;
    user_id: number;
    product_id: number;
    time: Date;
}

@Table({tableName: 'comments'})
export class Comments extends Model<Comments, CommentsAttr> {
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
    comment: string;

    
    @ForeignKey(() => User)
    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    user_id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    product_id: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: new Date,
    })
    time: Date;
}
