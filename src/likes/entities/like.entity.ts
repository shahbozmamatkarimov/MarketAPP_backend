import { Column, DataType, Model, Table } from "sequelize-typescript";

interface LikeAttr{
    dislikes: number;
    likes: number;
}

@Table({tableName: 'likes'})
export class Like extends Model<Like, LikeAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    })
    likes: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    })
    dislikes: number;
}
