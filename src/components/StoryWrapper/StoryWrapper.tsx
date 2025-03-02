import { CanvasAttributes } from "../../../storyData/types";
import { ComponentPreview } from "../storyComponents/ComponentPreview.js";

interface StoryWrapperProps {
    attributes: CanvasAttributes;
    component: React.FC<any>;
}

export function StoryWrapper({ attributes, component: Component }: StoryWrapperProps) {
    return (
        <ComponentPreview canvas={attributes.canvas} withSpacing>
            <Component {...(attributes.props || null)} />
        </ComponentPreview>
    );
}
