class productRecomendationModel {
  static generateContent(body) {
    const { selectedItem } = body;

    const payload = {};

    payload["item category"] = selectedItem.name;
    payload["attributes informations"] = selectedItem.attribute_info;

    if (body?.companyName) {
      payload["Company"] = body.companyName;
    }

    if (body?.brandName) {
      payload["Brand"] = body.brandName;
    }

    if (body?.productName) {
      payload["Product"] = body.productName;
    }

    if (body?.promotion) {
      payload["Promotion"] = body.promotion;
    }

    return {
      infos: payload,
    };
  }

  static switchStatus(body) {
    const { language, template, tone } = body;

    return {
      lang: language,
      task: template,
      tone: tone,
      more_options: {},
    };
  }
}

export default productRecomendationModel;
