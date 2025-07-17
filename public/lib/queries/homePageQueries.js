export const navbarQuery = {
  populate: {
    navbar: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText", "name"],
            },
          },
        },
        navLinks: {
          populate: true,
        },
        cta: {
          populate: true,
        },
      },
    },
  },
};

export const heroSectionQuery = {
  populate: {
    explore: {
      populate: true,
    },
    leftImage: {
      populate: true,
    },
    loginCta: {
      populate: true,
    },
  },
};

export const technologySectionQuery = {
  populate: {
    tech: {
      populate: {
        techImage: {
          fields: ["url", "alternativeText", "name"],
        },
      },
    },
  },
};
