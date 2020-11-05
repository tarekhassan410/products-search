import { React } from "react";

export default function Brands({
  brands,
  selectedBrands,
  updateSelectedBrands,
}) {
  return (
    <>
      <details className="mt-2">
        <summary>
          {" "}
          Brands{" "}
          {selectedBrands.length > 0 && (
            <span className="bg-green-800 px-2 text-white">
              {selectedBrands.length}
            </span>
          )}{" "}
        </summary>
        {brands.map((brand) => (
          <span className="mr-4">
            <input
              type="checkbox"
              id={brand.name}
              name={brand.name}
              className="mr-1"
              value={brand.name}
              onChange={(e) => updateSelectedBrands(e)}
            />
            <label htmlFor={brand.name}>{brand.name}</label>
          </span>
        ))}
      </details>
    </>
  );
}
