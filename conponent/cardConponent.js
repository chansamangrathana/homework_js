export const cardConponent = (product) => {
  return `<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#" class ="block w-[250px] h-[250px] overflow-hidden">
        <img class="${
          product?.image ||
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAOVBMVEX///+hoaGampqdnZ2srKy0tLSoqKjZ2dnq6ur39/fAwMDt7e3g4OC7u7vw8PD6+vqTk5PS0tLIyMhAQKZNAAACjElEQVR4nO3a2XKqQBRAUXsCZGz4/4+9EhCQsS50FYeqvV41hm17Gkh8vQAAAAAAAAAAAAAAAAAAAAAAAAAACCIvXFB1dWNMo01I2iY3xqRGGR2KUcrmt8aYOksCyZ2+OUaH+/VlQUwwxGwRFJM3aXNtYxUTk7hIfRTvCy8mJSZxpm1Rxl2okRKTdi1K6QsXJEJiEvuNUfb80giJiaNvi9Ll6RcTElOrMSY7/WJCYnI7xJjHr0zpvjNzZTsTEjN+zvzueTPVqtl+VErM5y5Nt+vi472dufisnyk2HxYT8/rcjHjtdgcm9n+LV289Lifm9aoOTpel7z+KW/udpJgjw4YXbTzhQTGpHnbvjbF5Tkzu1Wh9bJ4TM21RanWjeExMZH5iVsfmKTHjwPTSlSc9JCbxsxZl4uWzHhKzaFFGLa/hZMZks9PibGA6bvFjImOs99H0fa/nA9NZXHJKjGlvoY0ar22WA9Ob/6TAmObvQLUbatbXpd2fZ2cbeTFxf6T+e5Z3awPTbQKzyxpxMeXwpw3fve/11odsOTbiYsZ16MYm22sx6ue+VFpMMzlUXVST6/71Gju9BxIWk6vpgPh4Z2D6munYyIqp7O+xm+agRf3cDciKKebHvrkrj73RODaiYurDQ1+rGU9IkmKS1Uuw45rhbkBQzPto2LdE37sBQTHpyZbP/tyPjZyYyX81/rumHxsxMYk9uzCtRlRMdXZguqXpxkZKTHN8xLs1LpMTE5/blSc17XWcjJjEHp/qD2LasZER00T2qsglMmKqMguglBATv0NJbo9RLg2liMy9MTrgdzS1uTemjsIqzn+L4Loqj4M6//UOAAAAAAAAAAAAAAAAAAAAAAAAAMBl/wCSoC7OdsS5KwAAAABJRU5ErkJggg=="
        }" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${
              product.title
            }</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${
              product.price
            }</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>`;
};
