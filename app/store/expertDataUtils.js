const computeExpertDataCounts = (experts, citations, mediaAppearances) => {
  return experts.map((expert) => {
    const citationCount = citations[expert.name]?.length || 0;
    const mediaAppearanceCount = mediaAppearances[expert.name]?.length || 0;

    return {
      ...expert,
      citationCount,
      mediaAppearanceCount,
    };
  });
};

export default computeExpertDataCounts;
