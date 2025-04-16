import * as React from 'react';
import { View } from 'react-native';
import { cn } from '~/lib/utils/cn';
import { Text } from '~/components/ui/text';
import { Hotel } from '~/lib/icons/Hotel';

interface BuildingPlanProps {
  className?: string;
}

const BuildingPlan = React.forwardRef<React.ElementRef<typeof View>, BuildingPlanProps>(
  ({ className, ...props }, ref) => {
    return (
      <View ref={ref} className={cn('relative mb-4', className)} {...props}>
        <View className="flex flex-row items-center justify-center">
          <Hotel className="h-24 w-24 text-foreground" />
          <Text className='text-xl font-semibold'>Building plan</Text>
        </View>
      </View>
    );
  }
);
BuildingPlan.displayName = 'BuildingPlan';

export { BuildingPlan };
