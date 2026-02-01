// Seed script to populate the database with mock data from frontend
// Run with: npm run seed

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServicesService } from './business/services/services.service';

const MOCK_SERVICES = [
    // Cleaning
    {
        title: 'Full House Cleaning',
        category: 'Cleaning',
        provider: 'Kylee Danford',
        price: 25,
        rating: 4.8,
        reviewCount: 8289,
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
        isBookmarked: true,
        isPopular: true,
    },
    {
        title: 'Deep Office Cleaning',
        category: 'Cleaning',
        provider: 'Alfonzo Schuessler',
        price: 30,
        rating: 4.7,
        reviewCount: 4210,
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Repairing
    {
        title: 'AC Repair & Service',
        category: 'Repairing',
        provider: 'Sarah Johnson',
        price: 45,
        rating: 4.9,
        reviewCount: 5120,
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
        isBookmarked: true,
        isPopular: true,
    },
    {
        title: 'Fridge Maintenance',
        category: 'Repairing',
        provider: 'Bennie Woodbury',
        price: 35,
        rating: 4.6,
        reviewCount: 2150,
        image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Painting
    {
        title: 'Wall Painting',
        category: 'Painting',
        provider: 'Maricela Sullins',
        price: 22,
        rating: 4.8,
        reviewCount: 3120,
        image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Full House Painting',
        category: 'Painting',
        provider: 'Frederic Denney',
        price: 150,
        rating: 4.9,
        reviewCount: 1205,
        image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Laundry
    {
        title: 'Dry Cleaning',
        category: 'Laundry',
        provider: 'Janetta Rotolo',
        price: 15,
        rating: 4.7,
        reviewCount: 2341,
        image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400',
        isBookmarked: true,
        isPopular: true,
    },
    {
        title: 'Premium Ironing',
        category: 'Laundry',
        provider: 'Clinton McClure',
        price: 10,
        rating: 4.5,
        reviewCount: 1560,
        image: 'https://images.unsplash.com/photo-1545173168-9f19dd7eadc4?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Appliance
    {
        title: 'TV Installation',
        category: 'Appliance',
        provider: 'Lauralee Quintera',
        price: 40,
        rating: 4.8,
        reviewCount: 5670,
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Washing Machine Fix',
        category: 'Appliance',
        provider: 'Rayford Chenail',
        price: 35,
        rating: 4.7,
        reviewCount: 3410,
        image: 'https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?w=400',
        isBookmarked: true,
        isPopular: true,
    },
    // Plumbing
    {
        title: 'Pipe Leakage Fix',
        category: 'Plumbing',
        provider: 'Titus Kitamura',
        price: 28,
        rating: 4.9,
        reviewCount: 4320,
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Tap Replacement',
        category: 'Plumbing',
        provider: 'Slyvia Hardie',
        price: 20,
        rating: 4.6,
        reviewCount: 1890,
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Shifting
    {
        title: 'Local Moving',
        category: 'Shifting',
        provider: 'Freida Varnes',
        price: 120,
        rating: 4.8,
        reviewCount: 890,
        image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=400',
        isBookmarked: true,
        isPopular: true,
    },
    {
        title: 'Office Relocation',
        category: 'Shifting',
        provider: 'Jenny Wilson',
        price: 350,
        rating: 4.9,
        reviewCount: 450,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Beauty
    {
        title: 'Full Makeup',
        category: 'Beauty',
        provider: 'Rosalina Kleyer',
        price: 60,
        rating: 4.9,
        reviewCount: 1240,
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Facial & Skin Care',
        category: 'Beauty',
        provider: 'Phoebe Venturi',
        price: 45,
        rating: 4.7,
        reviewCount: 980,
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // AC Repair
    {
        title: 'AC Gas Refill',
        category: 'AC Repair',
        provider: 'Darcel Allsop',
        price: 55,
        rating: 4.8,
        reviewCount: 3670,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Split AC Install',
        category: 'AC Repair',
        provider: 'Chaya Scurry',
        price: 80,
        rating: 4.9,
        reviewCount: 1560,
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Vehicle
    {
        title: 'Full Car Service',
        category: 'Vehicle',
        provider: 'Freida Varnes',
        price: 150,
        rating: 4.9,
        reviewCount: 2310,
        image: 'https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Bike Repairing',
        category: 'Vehicle',
        provider: 'Clinton McClure',
        price: 25,
        rating: 4.7,
        reviewCount: 1890,
        image: 'https://images.unsplash.com/photo-1485903594399-52264883445e?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Electronics
    {
        title: 'Laptop Screen Fix',
        category: 'Electronics',
        provider: 'Kylee Danford',
        price: 90,
        rating: 4.8,
        reviewCount: 890,
        image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Phone Battery Swap',
        category: 'Electronics',
        provider: 'Janetta Rotolo',
        price: 30,
        rating: 4.5,
        reviewCount: 2340,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Massage
    {
        title: 'Thai Massage',
        category: 'Massage',
        provider: 'Maricela Sullins',
        price: 70,
        rating: 4.9,
        reviewCount: 1560,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Relaxing Spa',
        category: 'Massage',
        provider: 'Frederic Denney',
        price: 50,
        rating: 4.7,
        reviewCount: 3120,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecee?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    // Men's Salon
    {
        title: 'Haircut & Beard',
        category: "Men's Salon",
        provider: 'Sarah Johnson',
        price: 25,
        rating: 4.8,
        reviewCount: 5670,
        image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
        isBookmarked: false,
        isPopular: true,
    },
    {
        title: 'Executive Grooming',
        category: "Men's Salon",
        provider: 'Kylee Danford',
        price: 40,
        rating: 4.9,
        reviewCount: 1240,
        image: 'https://images.unsplash.com/photo-1621605815841-28dc7f7178c1?w=400',
        isBookmarked: false,
        isPopular: true,
    },
];

async function seed() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const servicesService = app.get(ServicesService);

    console.log('🌱 Starting database seed...');

    try {
        // Check if data already exists
        const existing = await servicesService.findAll();
        if (existing.length > 0) {
            console.log(
                `⚠️  Database already contains ${existing.length} services. Skipping seed.`,
            );
            console.log('   To re-seed, delete existing records first.');
            await app.close();
            return;
        }

        // Bulk create all services
        const created = await servicesService.bulkCreate(MOCK_SERVICES);
        console.log(`✅ Successfully seeded ${created.length} services!`);

        // Show summary by category
        const categories = [...new Set(created.map((s) => s.category))];
        console.log('\n📊 Services by category:');
        categories.forEach((cat) => {
            const count = created.filter((s) => s.category === cat).length;
            console.log(`   - ${cat}: ${count} services`);
        });

        const popular = created.filter((s) => s.isPopular).length;
        const bookmarked = created.filter((s) => s.isBookmarked).length;
        console.log(`\n⭐ Popular services: ${popular}`);
        console.log(`🔖 Bookmarked services: ${bookmarked}`);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
    }

    await app.close();
}

seed();
