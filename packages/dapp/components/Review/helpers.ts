import { graphql } from '@quest-chains/sdk';

import { SORT } from '@/components/Review/ReviewToolbar';
import { SubmissionType } from '@/components/Review/SubmissionTile';

export const removeSelectedFromReviewed = (
  submissions: SubmissionType[],
  selected: SubmissionType[],
) => submissions.filter(r => !selected.map(s => s.id).includes(r.id));

export const statusToSubmission = (
  q: graphql.QuestStatusInfoFragment,
): SubmissionType => ({
  id: q.id,
  userId: q.user.id,
  questId: q.quest.questId,
  name: q.quest.name,
  description: q.quest.description,
  submissionDescription:
    q.submissions[q.submissions.length - 1].description ?? '',
  imageUri: q.submissions[q.submissions.length - 1]?.imageUrl || undefined,
  externalUri:
    q.submissions[q.submissions.length - 1]?.externalUrl || undefined,
  submissionTimestamp: Number(
    q.submissions[q.submissions.length - 1].timestamp,
  ),
  reviewComment: q.reviews.length
    ? (q.reviews[q.reviews.length - 1].description ?? '')
    : '',
  success:
    // eslint-disable-next-line no-nested-ternary
    q.status === graphql.Status.Pass
      ? true
      : q.status === graphql.Status.Fail
        ? false
        : undefined,
});

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
