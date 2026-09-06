window.CALCULATOR_PRESETS = {
  defaultMonthlyAdSpend: 4000,
  defaultCurrentRevenue: 8000,
  defaultSingleImplantValue: 4000,
  defaultFullArchValue: 25000,
  historicalMultipliers: {
    minimumRoas: 7.0,
    averageRoas: 8.8,
    peakRoas: 10.4
  },
  chairCapacityModels: [
    {
      type: "Solo Independent Practice (3-4 Chairs)",
      averageUnbookedSlotsPerWeek: 8,
      typicalManifestAddedMonthlyGross: 32000,
      breakEvenCasesNeeded: 1
    },
    {
      type: "Multi-Doctor Restorative Center (5-8 Chairs)",
      averageUnbookedSlotsPerWeek: 16,
      typicalManifestAddedMonthlyGross: 68000,
      breakEvenCasesNeeded: 1
    },
    {
      type: "Surgical / Full-Arch Specialty Practice (8+ Chairs)",
      averageUnbookedSlotsPerWeek: 24,
      typicalManifestAddedMonthlyGross: 145000,
      breakEvenCasesNeeded: 1
    }
  ]
};
