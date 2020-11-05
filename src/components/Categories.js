import { React } from "react";

export default function Categories({
  categories,
  selectedCategories,
  updateSelectedCategories,
}) {
  return (
    <>
      <details className="mt-2">
        <summary>
          {" "}
          Categories{" "}
          {selectedCategories.length > 0 && (
            <span className="bg-green-800 px-2 text-white">
              {selectedCategories.length}
            </span>
          )}{" "}
        </summary>
        {categories.map((category) => (
          <span className="mr-4">
            <input
              type="checkbox"
              id={category.name}
              name={category.name}
              className="mr-1"
              value={category.name}
              onChange={(e) => updateSelectedCategories(e)}
            />
            <label htmlFor={category.name}>{category.name}</label>
          </span>
        ))}
      </details>
    </>
  );
}
