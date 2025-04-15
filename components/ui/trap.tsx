import * as React from 'react';
import { View, Text } from 'react-native';
import { Rat } from '~/lib/icons/Rat';
import { cn } from '~/lib/utils';

interface TrapProps {
  count?: number;
  className?: string;
}

const Trap = React.forwardRef<React.ElementRef<typeof View>, TrapProps>(
  ({ count, className, ...props }, ref) => {
    return (
      <View ref={ref} className={cn('relative', className)} {...props}>
        <Rat className="h-6 w-6 text-foreground" />
        {count != null && (
          <View className="absolute -right-2 -top-2 min-w-[1.125rem] h-[1.125rem] rounded-full bg-primary flex items-center justify-center">
            <Text className="text-xs font-medium text-primary-foreground">
              {count}
            </Text>
          </View>
        )}
      </View>
    );
  }
);
Trap.displayName = 'Trap';

export { Trap };
