
export const query = `
query Countries {
    countries {
      name
      code
      native
      capital
      currency
      phone
      emoji
      languages {
        name
      }
      continent {
        name
      }
    }
  }
	`;