module.exports = {
	createDone: async (parent, { data: { userId, donePlan } }, { Done }) => {
		return await new Done({
			userId,
			donePlan
		}).save();
	}
}; 