// util function for mockup data

// add a title if the object does not have one
const addTitle = (data: string) => {
  if (data.indexOf("SKU") <= 11) {
    return "<p>Demo - Mock up Title</p>" + data;
  }
  return data;
};

// show only first <p></p> of product content (not including title)
const trimMockupData = (data: string) => {
  const bodyHtml: string | any = addTitle(data);
  const firstP: string = bodyHtml.indexOf("</p>");
  const secondP: string = bodyHtml.indexOf("</p>", firstP + 1);
  return bodyHtml.substr(0, secondP);
};

export { trimMockupData };
