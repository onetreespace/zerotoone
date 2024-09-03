import { SORT } from '@/components/Review/ReviewToolbar';
import { SubmissionType } from '@/components/Review/SubmissionTile';
import { QuestStatusInfoFragment, Status } from '@/graphql';

export const removeSelectedFromReviewed = (
  submissions: SubmissionType[],
  selected: SubmissionType[],
) => submissions.filter(r => !selected.map(s => s.id).includes(r.id));

export const statusToSubmission = (
  q: QuestStatusInfoFragment,
): SubmissionType => {
  const latestSubmission = q.submissions[q.submissions.length - 1];
  // const latestReview = q.reviews[q.reviews.length - 1];
  return {
    id: q.id,
    userId: q.user.id,
    questId: q.quest.questId,
    name: '',
    description: '',
    submissionDescription: '',
    imageUri: '',
    externalUri: '',
    submissionTimestamp: Number(latestSubmission.timestamp),
    reviewComment: '',
    success:
      // eslint-disable-next-line no-nested-ternary
      q.status === Status.Pass
        ? true
        : q.status === Status.Fail
          ? false
          : undefined,
  };
};

export const sort = (a: number, b: number, sortType: SORT) => {
  switch (sortType) {
    case SORT.DateDesc:
      return b - a;
    case SORT.DateAsc:
      return a - b;
    default:
      return 0;
  }
};
