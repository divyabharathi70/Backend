const ProductCard = () => {
    return (
        <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
                src="/download.jpg"
                alt="ChocoTruffle"
                className="w-full h-64 object-cover"
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    ChocoTruffle
                </h3>

                <Detail />
            </div>
        </div>
    );
};

export default ProductCard;

export const Detail = () => {
    return (
        <p className="text-gray-600 text-sm leading-relaxed">
            Choco that melts in your mouth...
        </p>
    );
};