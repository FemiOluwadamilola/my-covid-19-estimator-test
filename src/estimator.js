const covid19ImpactEstimator = (data) => {
  const input = {
    region:{
      name:"africa",
      avgAge:19.7,
      avgDailyIncomeInUSD:5,
      avgDailyIncomePopulation:0.71
    },
    periodType:'days',
    timeToElapse:58,
    reportedCases:674,
    population:66622705,
    totalHospitalBeds:1380614
  }
  const infected = input.reportedCases;
  var currentInfected = infected;
  // function to get currentInfected 
  const calCurrentInfected = (x) => currentInfected * x;
  // variables for 
  const svcForImpact = 15/100 * calCurrentInfected(10) * 1024;
	const svcForSevereImpact = 15/100 * calCurrentInfected(50) * 1024;
  return{
    data:input,
    impact:{
      currentInfected:calCurrentInfected(10),
      infectionsByRequestedTime:calCurrentInfected(10) * 1024,
      severeCasesByRequestedTime:svcForImpact,
    	hospitalBedsByRequestedTime:35/100 * input.totalHospitalBeds + svForImpact,
      casesForICUByRequestedTime:5/100 * calCurrentInfected(10) * 1024,
      casesForVentilatorsByRequestedTime:2/100 * calCurrentInfected(10) * 1024,
      dollarsInFlight:(calCurrentInfected(10) * 1024 * 0.65) * 1.5 * 30
    
    },
    severeImpact:{
      currentInfected:calCurrentInfected(50),
      infectionsByRequestedTime:calCurrentInfected(50) * 1024,
      severeCasesByRequestedTime:svcForSevereImpact,
      hospitalBedsByRequestedTime:35/100 * input.totalHospitalBeds + svForSevereImpact,
      casesForICUByRequestedTime:5/100 * calCurrentInfected(50) * 1024,
      casesForVentilatorsByRequestedTime:2/100 * calCurrentInfected(50) * 1024,
      dollarsInFlight:(calCurrentInfected(50) * 1024 * 0.65) * 1.5 * 30
    	
    }
  }
}

export default covid19ImpactEstimator;
