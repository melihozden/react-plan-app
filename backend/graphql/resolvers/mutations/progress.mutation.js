module.exports = {
	createProgress: async (parent, { data: { userId, progressPlan } }, { Progress }) => {
		return await new Progress({
			userId,
			progressPlan
		}).save();
	}
}; 