const covid19ImpactEstimator = (data) => {
  const input = data;
  const infected = input.reportedCases;
  const currentInfected = infected;
  const calCurrentInfected = (x) => currentInfected * x;
  const svcForImpact = (15 / 100) * (calCurrentInfected(10) * 1024);
  const svcForSevereImpact = (15 / 100) * (calCurrentInfected(50) * 1024);
  return { 
    data: input,
    impact: {
      currentInfected: calCurrentInfected(10),
      infectionsByRequestedTime: calCurrentInfected(10) * 1024,
      severeCasesByRequestedTime: svcForImpact,
      hospitalBedsByRequestedTime: (35 / 100) * (input.totalHospitalBeds + svcForImpact),
      casesForICUByRequestedTime: (5 / 100) * (calCurrentInfected(10) * 1024),
      casesForVentilatorsByRequestedTime: (2 / 100) * (calCurrentInfected(10) * 1024),
      dollarsInFlight: (calCurrentInfected(10) * 1024 * 0.65) * (1.5 * 30)
    },
    severeImpact: {
      currentInfected: calCurrentInfected(50),
      infectionsByRequestedTime: calCurrentInfected(50) * 1024,
      severeCasesByRequestedTime: svcForSevereImpact,
      hospitalBedsByRequestedTime: (35 / 100) * (input.totalHospitalBeds + svcForSevereImpact),
      casesForICUByRequestedTime: (5 / 100) * (calCurrentInfected(50) * 1024),
      casesForVentilatorsByRequestedTime: (2 / 100) * (calCurrentInfected(50) * 1024),
      dollarsInFlight: (calCurrentInfected(50) * 1024 * 0.65) * (1.5 * 30)
    }
  };
};

export default covid19ImpactEstimator;
