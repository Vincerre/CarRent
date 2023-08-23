const initialState = {
  categories: [
    { id: 'all', name: 'All' },
    { id: 'standard', name: 'Standard' },
    { id: 'compact', name: 'Compact' },
    { id: 'mini', name: 'Mini' },
    { id: 'eco', name: 'Eco' },
    { id: 'premium', name: 'Premium' },
  ],
  brands: [
    { id: 'mercedes', name: 'Mercedes' },
    { id: 'skoda', name: 'Skoda' },
    { id: 'bmw', name: 'BMW' },
    { id: 'opel', name: 'Opel' },
    { id: 'honda', name: 'Honda' },
    { id: 'audi', name: 'Audi' },
    { id: 'toyota', name: 'Toyota' },
    { id: 'renault', name: 'Renault' },
    { id: 'volkswagen', name: 'Volkswagen' },
  ],
  cars: [],
  cart: [],
  orders: [],
};

export default initialState;
