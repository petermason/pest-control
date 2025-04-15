import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Trap } from '~/components/ui/trap';
import { cn } from '~/lib/utils';


interface PlaceProps {
  place: {
    name: string;
    trapCount: number;
  };
  className?: string;
  onPress?: () => void;
}

const Place = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, PlaceProps>(
  ({ place, className, onPress, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className={cn('flex-row items-center justify-between p-4', className)}
        onPress={onPress}
        {...props}
      >
        <Text className="text-foreground text-base font-medium">{place.name}</Text>
        <Trap count={place.trapCount} />
      </TouchableOpacity>
    );
  }
);

Place.displayName = 'Place';

export { Place };
