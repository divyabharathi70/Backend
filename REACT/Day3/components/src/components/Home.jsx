import ProductCard from "./ProductCard";

const Home = () => {
    return (
        <div className="min-h-screen bg-amber-50 p-8">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">
                Our Chocolates
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Home;