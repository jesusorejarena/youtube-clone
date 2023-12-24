/* eslint-disable react/prop-types */
import { Avatar } from '@nextui-org/react';
import { format } from 'date-fns';

const Comment = ({ item }) => {
	return (
		<div className="nc-CommentCard flex overflow-hidden">
			<div className="pt-1">
				<Avatar name={item?.user?.name} size="md" radius="sm" />
			</div>
			<div className="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
				<div className=" flex pr-6">
					<div className="flex flex-col items-start justify-center w-full font-semibold text-neutral-800 dark:text-neutral-100 gap-3">
						{item?.user?.name}

						<div className="flex text-xs gap-x-2 items-center font-medium">
							{item?.created && format(new Date(item?.created), 'MM/dd/yyyy hh:mm a')}
						</div>
					</div>
				</div>
				<p
					className="overflow-hidden block text-neutral-700 mt-5 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300 whitespace-pre-line overflow-wrap"
					style={{ wordBreak: 'break-word' }}
				>
					{item?.comment}
				</p>
			</div>
		</div>
	);
};

export default Comment;
