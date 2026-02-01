import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('services')
export class Service {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    category: string;

    @Column()
    provider: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'decimal', precision: 3, scale: 2 })
    rating: number;

    @Column({ name: 'review_count', type: 'int', default: 0 })
    reviewCount: number;

    @Column({ type: 'text' })
    image: string;

    @Column({ name: 'is_bookmarked', default: false })
    isBookmarked: boolean;

    @Column({ name: 'is_popular', default: false })
    isPopular: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
