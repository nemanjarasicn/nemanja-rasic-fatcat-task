import React from 'react';
import { componentMap, layoutMap } from '@homework-task/constants/constants';

// models
import { PageDataProps } from '@homework-task/models/app.models';

const PageGenerator = ({ data }: PageDataProps) => {
    return (
        <div>
            {data.map((section, index) => {
                const LayoutComponent = layoutMap[section.type];

                if (!section.components) {
                    console.warn(`Unknown layout type: ${section.type}`);
                    return null;
                }

                return (
                    <LayoutComponent key={index} {...section.props}>
                        {section.components.map((component, componentIndex) => {
                            const ChildrenComponent =
                                componentMap[component.type];

                            if (!ChildrenComponent) {
                                console.warn(
                                    `Unknown component type: ${component.type}`
                                );
                                return null;
                            }

                            return (
                                <ChildrenComponent
                                    key={componentIndex}
                                    {...component.props}
                                />
                            );
                        })}
                    </LayoutComponent>
                );
            })}
        </div>
    );
};

export default PageGenerator;
