import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { cn } from '~/lib/utils/cn';
import { Text } from '~/components/ui/text';
import { Hotel } from '~/lib/icons/Hotel';
import { places } from '~/data';
import { buildPlaceTree } from '~/lib/utils/buildPlaceTree';
import { PlaceWithChildren } from '~/lib/utils/types';
import { Place } from '~/components/ui/place';

interface BuildingPlanProps {
  className?: string;
}

const BuildingPlan = React.forwardRef<React.ElementRef<typeof View>, BuildingPlanProps>(
  ({ className, ...props }, ref) => {
    const tree = buildPlaceTree(places);

    const renderTree = ({ places, level = 0 }:{ places: PlaceWithChildren[], level:number }) => {
      return (
        <>
          {places.map(place => (
            <View key={place.id} style={{ marginLeft: level * 8 }}>
              <Place place={{ id: place.id, name: place.name, trapCount: place.traps_count}} />
              {/* loop again if there are any children */}
              {place.children && place.children.length > 0 && (
                renderTree({ places: place.children, level: level + 1 })
              )}
            </View>
          ))}
        </>
      );
    };



    return (
      <View ref={ref} className={cn('relative', className)} {...props}>
        <View className="flex flex-row items-center justify-center border-b-hairline p-2 mb-2">
          <Hotel className="h-24 w-24 text-foreground mr-4" />
          <Text className='text-xl font-semibold'>Building plan</Text>
        </View>
        {renderTree({ places: tree, level: 0 })}
      </View>
    );
  }
);
BuildingPlan.displayName = 'BuildingPlan';

export { BuildingPlan };
