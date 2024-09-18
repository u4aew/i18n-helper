export const createPageArray = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const pages = [];
  const maxPagesToShow = 7; // Число страниц, которые мы хотим отображать

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const startPages = [1];
    const endPages = [totalPages];

    if (currentPage <= 4) {
      pages.push(...startPages);
      for (let i = 2; i <= 5; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(...endPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(...startPages);
      pages.push('...');
      for (let i = totalPages - 4; i <= totalPages - 1; i++) {
        pages.push(i);
      }
      pages.push(...endPages);
    } else {
      pages.push(...startPages);
      pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(...endPages);
    }
  }

  return pages;
};

export function generateGradient(color: string) {
  // Функция для преобразования HEX в RGB
  function hexToRgb(hex: string) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return [r, g, b];
  }

  // Функция для преобразования RGB в HEX
  function rgbToHex(r: number, g: number | undefined, b: number | undefined) {
    return (
      '#' +
      // @ts-ignore
      ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
    );
  }

  // Функция для изменения яркости цвета
  function adjustBrightness([r, g, b]: number[], amount: number) {
    return [
      Math.min(255, Math.max(0, r + amount)),
      Math.min(255, Math.max(0, g + amount)),
      Math.min(255, Math.max(0, b + amount)),
    ];
  }

  // Преобразуем цвет из HEX в RGB
  let rgbColor = hexToRgb(color);

  // Создаем более светлый и более темный вариант цвета
  let lighterColor = adjustBrightness(rgbColor, 50);
  let darkerColor = adjustBrightness(rgbColor, -50);

  // Преобразуем обратно в HEX
  // @ts-ignore
  let lighterHex = rgbToHex(...lighterColor);
  // @ts-ignore
  let darkerHex = rgbToHex(...darkerColor);

  // Генерируем CSS градиент
  return `linear-gradient(45deg, ${lighterHex}, ${color}, ${darkerHex})`;
}
