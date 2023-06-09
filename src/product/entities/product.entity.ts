import { Column, Comment, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../user/entities/user.entity";
import { Like } from "../../likes/entities/like.entity";
import { Location } from "../../location/entities/location.entity";
import { Card } from "../../card/entities/card.entity";
import { Comments } from "../../comments/entities/comment.entity";
import { ProductType } from "../../product_type/entities/product_type.entity";

interface ProductAttr {
    user_id: number;
    likes_id: number;
    product_photo: string;
    title: string;
    describtion: string;
    price: string;
    views: number;
    loaction_id: string;
    card_id: number;
    comments_id: number;
    product_type_id: number;
}

@Table({ tableName: 'product' })
export class Product extends Model<Product, ProductAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    user_id: number;

    @ForeignKey(() => Like)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    likes_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    product_photo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    describtion: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    price: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    createdAt: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    views: number;

    @ForeignKey(() => Location)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    location_id: number;

    @ForeignKey(() => Card)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    card_id: number;

    @ForeignKey(() => Comments)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    comments_id: number;

    @ForeignKey(() => ProductType)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    product_type_id: number;
}
