const generateData = () => {
  const title = prompt("Title (or enter `x` to cancel)");
  if (title !== "x") {
    const description = prompt("Description (optional)");
    let content = prompt("Content (append comma if adding multiple to set)");
    const contentSet = [content];
    while (/.+,/i.test(content)) {
      content = prompt("More content");
      contentSet.push(content);
    }

    const outputObj = {};
    outputObj[title] = {
      Title: title,
      Description: description,
      Content: contentSet
    };
    console.log(
      "%cStore this object as a clobal variable (via right click) and use `copy(temp1)`.",
      "background: #242424; color: #ffab3d;"
    );
    console.log(outputObj);

    alert("Check console for object.");
  }
};

export default generateData;
