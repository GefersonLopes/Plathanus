import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  title: string;
  code: string;
  image: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  code,
  image,
  isNew = false,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full object-contain rounded-md cursor-pointer"
          onClick={() => navigate(`/produto/${code}`)}
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-[rgb(154,26,128,0.6)] text-white px-2 py-1.5 text-xs rounded-md font-raleway text-base font-medium cursor-default">
            Lançamento
          </span>
        )}
      </div>
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/produto/${code}`)}
      >
        <h3 className="text-base font-medium text-dark font-raleway pt-1">
          {title}
        </h3>
        <p className="text-quaternary font-raleway font-bold text-sm pt-1">
          Cód. Produto{" "}
          <strong className="font-normal font-roboto text-sm">{code}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
