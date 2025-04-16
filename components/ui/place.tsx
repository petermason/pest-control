import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Trap } from '~/components/ui/trap';
import { cn } from '~/lib/utils/cn';


interface PlaceProps {
  place: {
    id: string;
    name: string;
    trapCount: number;
  };
  className?: string;
  onPress?: (id: string) => void;
}

const Place = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, PlaceProps>(
  ({ place, className, onPress, ...props }, ref) => {
    return (
      <Link href={`/place/${place.id}`} asChild>
        <TouchableOpacity
          ref={ref}
          className={cn('flex-row items-center justify-between p-2 pt-3 border-b-hairline', className)}
          {...props}
      >
        <Text className="text-foreground text-base font-medium ">{place.name}</Text>
          <Trap count={place.trapCount} />
        </TouchableOpacity>
      </Link>
    );
  }
);

Place.displayName = 'Place';

export { Place };
