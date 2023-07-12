export type CreatePreferencePayload = {
  items: {
    title: string;
    unit_price: number;
    quantity: number;
  }[];
  back_urls: {
    success: string;
    failure: string;
    pending: string;
  };
  auto_return?: "all" | "approved";
};
