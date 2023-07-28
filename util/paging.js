'use strict';

// ==================================================

// Function phân chia page
module.exports = (dataArr) => {
  if (!dataArr) {
    return;
  }

  const pages = [];
  const pageCountList = [0];

  // Tổng số page
  if (dataArr.length > 9) {
    while (pageCountList.length <= Math.round(dataArr.length / 9)) {
      pageCountList.push(pageCountList.length);
    }
  }

  // Data của 1 page và số page
  pageCountList.map((pageNumber) => {
    const data = [];

    for (let i = pageNumber * 9; i < 9 + pageNumber * 9; i++) {
      if (dataArr[i]) {
        data.push(dataArr[i]);
      }
    }

    pages.push({
      pageNumber: pageNumber + 1,
      result: data,
    });
  });

  return pages;
};
