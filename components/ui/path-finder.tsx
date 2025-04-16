import * as React from 'react';
import { TextInput, View } from "react-native";
import { Text } from '~/components/ui/text';
import { cn } from "~/lib/utils/cn";
import { places } from '~/data';
import { findHighActivityPaths } from "~/lib/utils/findHighActivityPaths"; 

interface PathFinderProps {
  className?: string;
}

const PathFinder = React.forwardRef<React.ElementRef<typeof View>, PathFinderProps>(
  ({ className, ...props }, ref) => {
    const [paths, setPaths] = React.useState<string[]>([]);
    return (
      <View ref={ref} className={cn('relative', className)} {...props}>
        <Text className='text-lg mb-2 font-semibold'>Find high activity paths</Text>
        <View>
          <TextInput
            className='border border-gray-300 rounded p-2'
            placeholder="Number of traps"
            keyboardType="numeric"
            onChangeText={(text:string) => {
              const numTraps = parseInt(text);
              if (!isNaN(numTraps)) {
                const paths = findHighActivityPaths(places, numTraps);
                console.log("High activity paths:", paths)
                setPaths(paths);
                return;
              }
              setPaths([]);
            }}
          />
        </View>
        <View className='mt-4'>
          {paths.length > 0 ? (
            paths.map((path, index) => (
              <Text key={index} className='text-sm text-muted-foreground'>
                {path}
              </Text>
            ))
          ) : (
            <Text className='text-sm text-muted-foreground'>
              No high activity paths found.
            </Text>
          )}
        </View>
      </View>
    );
  }
);
PathFinder.displayName = 'PathFinder';

export { PathFinder };

